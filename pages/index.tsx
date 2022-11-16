import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <main>
      <div className="">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">About</Link>
        </p>
      </div>
    </main>
  </Layout>
);

export default Home;
