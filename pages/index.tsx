import Link from "next/link";
import { ButtonKbdTooltip } from "../components/buttons/ButtonKbdTooltip";
import Layout from "../components/Layout";
import { BRAND } from "../lib/constants";

const Home = () => (
    <Layout title={`Home | ${BRAND.name}`}>
        <main>
            <section id="hero-section z-0">
                <div
                    className="hero min-h-screen bg-base-300"
                    // style={{ height: "calc(100vh - 5rem)" }}
                >
                    <div className="hero-content text-center">
                        <div className="grid max-w-2xl place-items-center gap-4 2xl:max-w-md">
                            <h1 className="max-w-[13ch] place-self-center text-5xl font-bold leading-snug">
                                Simple tasker to organize things, finally.
                            </h1>
                            <p className="max-w-[36ch] pb-6 text-lg">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda quasi. In deleniti eaque aut
                                repudiandae et a id nisi.
                            </p>

                            <button className="text-md btn-primary btn mb-6 text-sm">
                                Get Started
                            </button>

                            <div className="mockup-window border border-neutral border-opacity-60 bg-base-300">
                                <div className="grid h-auto w-[80vw] grid-cols-2 place-content-start justify-center gap-4 bg-base-200 px-16 py-16">
                                    <Link href={"/demo"} className="btn hidden">
                                        Live Demo
                                    </Link>
                                    <Link href={"/demo"} className="btn hidden">
                                        Read Documentation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className='pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40'> */}
            <section
                id="add-your-tasks"
                className="bg-gradient-to-b from-black/40 via-base-300 to-base-100"
            >
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">
                                Add your tasks. Organize your life. Achieve more
                                every day.{" "}
                            </h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                        </div>
                        <div className=" card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="email"
                                        className="input-bordered input"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="password"
                                        className="input-bordered input"
                                    />
                                    <label className="label">
                                        <a
                                            href="#"
                                            className="link-hover label-text-alt link"
                                        >
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn-primary btn">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="mental-clarity"
                className="bg-gradient-to-t from-black/40 via-base-300 to-base-100"
            >
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">
                                Reach that mental clarity you&apos;ve been
                                longing for.
                            </h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                        </div>
                        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="email"
                                        className="input-bordered input"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="password"
                                        className="input-bordered input"
                                    />
                                    <label className="label">
                                        <a
                                            href="#"
                                            className="link-hover label-text-alt link"
                                        >
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn-primary btn">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="grid place-content-center space-y-4">
                    <blockquote className="text-center text-2xl font-semibold italic dark:text-slate-900">
                        When you look
                        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                            <span className="relative text-white">annoyed</span>
                        </span>
                        all the time, people think that you're busy.
                    </blockquote>
                    <div className="nopseudo">
                        <blockquote className="text-center text-2xl font-semibold italic dark:text-slate-900">
                            When you look
                            <span className="relative">
                                <span
                                    className="absolute -inset-1 block -skew-y-3 bg-pink-500"
                                    aria-hidden="true"
                                ></span>
                                <span className="relative text-white">
                                    annoyed
                                </span>
                            </span>
                            all the time, people think that you're busy.
                        </blockquote>
                    </div>
                    <ButtonKbdTooltip text="Add Task" kbd="Q">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                        </svg>
                    </ButtonKbdTooltip>
                </div>
            </section>
        </main>
    </Layout>
);

Home.auth = false;
export default Home;
