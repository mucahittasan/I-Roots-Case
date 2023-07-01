import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex items-center justify-between border-b-[1px] py-2 sm:px-0 px-2'>
            <Link href="/" className='flex items-center'>
                <Image
                    src="https://media.licdn.com/dms/image/C4D0BAQFNakFs4ryuOA/company-logo_200_200/0/1679392681885?e=1695859200&v=beta&t=7nbMJi4EU2kVnEuwPxL4fzri-fIV8crrt6VGvetpLrs"
                    alt='Logo'
                    width="50"
                    height="50"
                />
                <h1 className='text-3xl ml-2 font-medium text-primaryColor'>I&Roots</h1>
            </Link>
            <nav>
                <ul className='flex gap-x-6'>
                    <li>
                        <Link className='font-medium p-2 px-6 text-sm rounded-md bg-primaryColor transition hover:bg-primaryColor/90 text-white' href="/form-list">
                            Form List
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header