'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

const Page = () => {
    const router = useRouter()
    const params = useParams() // gets all params
    const Alias = params.alias
    const [Error, seterror] = useState(false)
    useEffect(() => {
        const fetchAlias = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    alias: Alias
                })
            })
            if (!res.ok) {
                console.log('somehting went wrong');
            } else {
                const data = await res.json()
                if (data.error === 'not saved') {
                    console.log("not saved");
                    seterror(true)
                    return
                }
                console.log(data.data.url);
                router.push(data.data.url)
            }
        }
        fetchAlias()
    }, [])

    return <>
        {(!Error ? <>
            <div className='h-[90vh]  flex justify-center items-center text-2xl font-light text-[rgb(63,63,63)]'>Loading. . .</div>
        </> : <>
            <div className='bg-[rgba(168,168,168,0.24)] px-12 max-sm:pb-4 py-6 w-[50%] max-sm:w-[70%] h-fit mt-30 max-sm:mt-10 flex flex-col justify-center items-center rounded-3xl text-xl font-light space-y-6 select-none '>
                <Image width={200} height={0} src={'/sorryVector.avif'} className="mix-blend-darken" alt="Vector" />
                <div className='text-center '>
                    We are very sorry but this alias is not saved in our DB please create again.
                </div>
                <Link href={'/shortner'}>
                    <button className="text-xl bg-[rgb(37,37,37)] text-white px-40 w-fit max-sm:w-70 py-2 rounded-3xl font-light max-sm:px-0 max-sm:text-[18px]">
                        Wanna Try?
                    </button>
                </Link>
            </div>
        </>)}

    </>

}

export default Page
