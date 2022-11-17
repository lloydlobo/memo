import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../utils/db";
import User from "../../../models/User";
import bcryptjs from "bcryptjs";

/**
 * authOptions() contains the dynamic route handler for
 * NextAuth.js which also contains all global NextAuth.js configurations.
 * All requests to /api/auth/* (signIn, callback, signOut, etc.),
 * will automatically be handled by NextAuth.js.
 * @source -  https://next-auth.js.org/getting-started/example
 */
// https://youtu.be/_IBlyR5mRzA?t=8972
export const authOptions = {
  session: {
    strategy: "jwt",
  },

  // user from db, token from next-auth lifecycle.
  callbacks: {
    async jwt({ token, user }: any) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token; // Fill token with db's data in users.
    },

    async session({ session, token }: any) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session; // Fill session with token's data.
    },
  },

  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        if (credentials === undefined) {
          console.error("next-auth: credentials is undefined");
          return {};
        }
        // Find user in db based on email in credential.
        const user = await User.findOne({
          email: credentials.email,
          // password: credentials.password,
        });
        await db.disconnect();

        const hasAuthorizedPassword = bcryptjs.compareSync(
          credentials.password,
          user.password
        );

        // Match user with password.
        if (user && hasAuthorizedPassword) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: "f",
            isAdmin: user.isAdmin,
          };
        }
        throw new Error("next-auth: Invalid email or password");
      },
    }),

    // GithubProvider({
    //   clientId: envGithubID(),
    //   clientSecret: envGithubSecret(),
    // }),
    // ...add more providers here
  ],
};

// Configure Shared session state in _app.tsx.
// Instances of useSession will then have access to the session data and status. The <SessionProvider /> also takes care of keeping the session updated and synced between browser tabs and windows.
export default NextAuth(authOptions as any);

/* TODO: Deploying to production
   When deploying your site set the NEXTAUTH_URL environment variable to the canonical URL of the website.
   NEXTAUTH_URL=https://example.com
   TIP
   In production, this needs to be set as an environment variable on the service you use to deploy your app.
   To set environment variables on Vercel, you can use the dashboard or the vercel env pull command. */

/**
 * envGithubID return github ID from local .env file.
 * Throws error if env is undefined.
 * @returns {string}
 */
function envGithubID(): string {
  const envGit: string | undefined = process.env.GITHUB_ID;
  if (typeof envGit === "undefined") {
    throw new Error("next-auth: process.env.GITHUB_ID is undefined");
  }
  return envGit;
}

/**
 * envGithubSecret return github secret from local .env file.
 * Throws error if env is undefined.
 * @returns {string}
 */
function envGithubSecret(): string {
  const envGit: string | undefined = process.env.GITHUB_SECRET;
  if (typeof envGit === "undefined") {
    throw new Error("next-auth: process.env.GITHUB_SECRET is undefined");
  }
  return envGit;
}
