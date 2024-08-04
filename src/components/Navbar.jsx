import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils/index'
import { navLists } from '../constants/index'

const Navbar = () => {
    return (
        <>
            <header className="w-full flex justify-between items-center py-10 px-5 sm:px-10">
                <nav className='w-full flex screen-max-width'>
                    <img className='cursor-pointer' src={appleImg} alt="apple" width={18} height={18} />

                    <div className='flex flex-1 justify-center max-sm:hidden'>
                        <ul className='flex gap-3'>
                            {navLists.map((item, index) => (
                                <li key={index} className='px-5 text-sm text-gray hover:text-white transition-all cursor-pointer'>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex items-baseline max-sm:justify-end max-sm:flex-1 gap-5'>
                        <img className='cursor-pointer' src={searchImg} alt="Search Img" width={18} height={18} />
                        <img className='cursor-pointer' src={bagImg} alt="Search Img" width={18} height={18} />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar