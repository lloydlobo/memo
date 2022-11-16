import Image from "next/image";
import React from "react";
import { brand } from "../../utils/brand";

/**
 * LoginForm
 * @returns {JSX.Element}
 */
// https://flowbite.com/blocks/marketing/login/
export function LoginForm(): JSX.Element {
  return (
    <div className="mx-auto mb-12 flex flex-col items-center justify-center px-6 md:h-screen lg:py-0">
      <a href="#" className="mb-6 flex items-center text-2xl font-semibold ">
        <Image
          className="mr-2 h-8 w-8"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
          width={200}
          height={200}
        />
        {brand.name}
      </a>

      <div className="w-full rounded-lg bg-base-300 shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Sign in to your account
          </h1>

          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Your email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 dark:border-gray-600  dark:ring-offset-gray-800"
                    required
                  />
                </div>

                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="">
                    Remember me
                  </label>
                </div>
              </div>

              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="focus:ring-primary-300  dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4"
            >
              Sign in
            </button>

            <p className="text-sm font-light">
              Don&apos;t have an account yet?{" "}
              <a
                href="#"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
