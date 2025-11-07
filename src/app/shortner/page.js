'use client'
import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { IoCopyOutline } from "react-icons/io5";
import isURL from 'validator/lib/isURL';

const Page = () => {
    const [Fullurl, setfullurl] = useState('')
    const [Alias, setalias] = useState('')
    const [Saved, setsaved] = useState(false)
    const [AliasfromDB, setaliasfromDB] = useState('')
    const copy = async () => {
        await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL + AliasfromDB}`);
        toast.success('Copied succesfully')
    }
    const URL = useRef()
    const ALIAS = useRef()

    const clear = async () => {
        URL.current.value = ''
        ALIAS.current.value = ''
        setsaved(false)
    }

    const handlesubmit = async () => {
        if (Fullurl === '') {
            toast.warning('Main URL is missing!')
            return
        } else if (Alias === '') {
            toast.warning('Alias is missing!')
            return
        } else {
            if (!isURL(Fullurl, { require_protocol: true })) {
                toast.error('This URL is not valid');
                return;
            }
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    url: Fullurl,
                    alias: Alias
                })
            })
            const data = await res.json()
            if (!res.ok) {
                toast.error('Please check logs')
                return
            } else if (data.error === 'taken') {
                toast.error('This alias is already taken')
                return
            }
            else {
                setsaved(true)
                setaliasfromDB(data.alias)
                toast.success('Your link is generated successfully')
                return
            }
        }

    }
    return <>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastClassName={() =>
                "font-mono text-[15px] bg-neutral-900 text-white rounded-lg shadow-md border border-neutral-700 p-4 w-100 flex wrap-anywhere  items-center overflow-clip"
            }
        />
        <div className='bg-[rgba(168,168,168,0.24)] px-9 py-4 w-120 max-sm:w-90 mt-30 flex justify-center items-center flex-col rounded-2xl  space-y-6 max-sm:space-y-3 select-none '>
            <div className='text-2xl font-light max-sm:text-xl w-full '>
                Generate your own
            </div>
            <div className='flex flex-col w-full space-y-2 '>
                <input readOnly={Saved} ref={URL} className='bg-white w-full h-10 outline-none  rounded-lg pl-3 max-sm:text-[15px]' onChange={(e) => {
                    setfullurl(e.target.value)
                    console.log(e.target.value);
                }} type="text" placeholder='Enter URL' />
                <input readOnly={Saved} ref={ALIAS} className='bg-white max-sm:text-[15px] w-full h-10 outline-none  rounded-lg pl-3' onKeyDown={(e) => {
                    if (e.key === 'Enter') handlesubmit()
                }}
                    onChange={(e) => {
                        setalias(e.target.value)
                        console.log(e.target.value);
                    }} type="text" placeholder='Enter preferred short URL text' />
                {(Saved ?
                    <button onClick={() => { clear() }} className='bg-black text-white rounded-2xl font-light mt-2 text-lg w-full h-12'>One more?</button>
                    :
                    <button onClick={() => { handlesubmit() }} className='bg-black text-white rounded-2xl font-light mt-2 text-lg  w-full h-12'>Generate</button>
                )}
            </div>
        </div>
        {
            (Saved && <><div className='bg-[rgba(168,168,168,0.24)] px-9 py-4 w-120 max-sm:w-90 mt-10 flex justify-center items-center flex-col rounded-2xl  space-y-6 select-none '>
                <div className='flex flex-col w-full'>
                    <h1 className='font-light text-2xl max-sm:text-xl'>Your URL</h1>
                    <div className='flex justify-between items-center border p-3 rounded-2xl mt-3 ml-3 bg-white'>
                        <div className='font-light  text-md select-text selection:bg-[rgb(202,202,202)]'>{`${process.env.NEXT_PUBLIC_BASE_URL + AliasfromDB}`}</div>
                        <button onClick={() => { copy() }}>
                            <IoCopyOutline size={24} className='text-[rgb(87,87,87)]' />
                        </button>
                    </div>
                </div>
            </div></>)
        }

    </>
}

export default Page
