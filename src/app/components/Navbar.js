import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div  className='bg-[rgba(168,168,168,0.24)] w-full h-25 flex justify-between items-center p-3 px-40 rounded-b-3xl select-none'>
      <Link href={'/'} className='text-3xl font-light  px-6 py-2 rounded-2xl'>
          SnapURL
      </Link>
      <div>
        <ul className='flex text-xl'>
          <Link href={'/'}><li className='transition-colors font-light duration-200 ease-in-out hover:bg-[rgba(168,168,168,0.47)] px-5 py-2 rounded-md'>Home</li></Link>
          <Link href={'/shortner'}><li className='transition-colors font-light duration-200 ease-in-out hover:bg-[rgba(168,168,168,0.47)] px-5 py-2 rounded-md'>Try Now</li></Link>
          <Link href={'/'}><li className='transition-colors font-light duration-200 ease-in-out hover:bg-[rgba(168,168,168,0.47)] px-5 py-2 rounded-md'>Github</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
