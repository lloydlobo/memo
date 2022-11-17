import Link from 'next/link';
import React from 'react'

// import Meta, { defaultMetaProps } from '@/components/layout/meta';
// export { getStaticProps } from '.';

// https://github.com/vercel/mongodb-starter/blob/main/pages/404.tsx
export default function Custom404() {
    return (
        < div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-black/60 via-base-300 to-base-200" >
            {/* <Meta props={{ ...defaultMetaProps, title: '404 | MongoDB Starter Kit', ogUrl: 'https://mongodb.vercel.app/404' }} /> */}
            <div className='flex flex-col items-center justify-center gap-12'>
                < h1 className="text-2xl font-light text-white items-center justify-center flex uppercase" >
                    404 < span className="mx-3 text-4xl" >|</span >Not Found
                </h1 >
                <p>We could not find the requested page</p>
                <Link className='btn btn-accent btn-outline' href='/'>Go back home</Link>
            </div >
        </div >
    );
}
