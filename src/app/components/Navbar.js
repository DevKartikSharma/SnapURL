import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div  className='bg-[rgba(168,168,168,0.24)] w-full h-25 flex justify-between max-lg:px-20 max-md:px-10 max-sm:px-3 max-sm:h-20 items-center p-3 px-40 rounded-b-3xl select-none'>
      <Link href={'/'} className='text-3xl font-light max-md:text-2xl px-6 py-2 rounded-2xl'>
          SnapURL
      </Link>
      <div>
        <ul className='flex text-xl max-md:text-lg'>
          <Link href={'/'}><li className='transition-colors font-light duration-200 ease-in-out hover:bg-[rgba(168,168,168,0.47)] px-5 max-md:px-3 py-2 rounded-md'>Home</li></Link>
          <Link href={'/shortner'}><li className='transition-colors font-light duration-200 ease-in-out hover:bg-[rgba(168,168,168,0.47)] px-5 max-md:px-3 py-2 rounded-md'>Try Now</li></Link>
          <Link href={'/'}><li className='transition-colors font-light duration-200 ease-in-out hover:bg-[rgba(168,168,168,0.47)] px-5 max-md:px-3 max-sm:hidden py-2 rounded-md'>Github</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
