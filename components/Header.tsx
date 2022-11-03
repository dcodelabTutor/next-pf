import React from 'react';
//npm install @heroicons/react@1
//npm install react-icons --save

import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';

function Header() {
	return (
		<header>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<img
					src='https://rb.gy/ulxxee'
					width={100}
					height={100}
					className='cursor-pointer object-contain'
				/>

				<ul className='hidden space-x-4 md:flex'>
					<li className='headerLink'>TV Shows</li>
					<li className='headerLink'>Home</li>
					<li className='headerLink'>Movies</li>
					<li className='headerLink'>My List</li>
					<li className='headerLink'>New & Popular</li>
				</ul>
			</div>

			<div className='flex items-center space-x-4 text-sm font-light'>
				<SearchIcon className='hidden h-6 w-6 sm:inline' />
				<p className='hidden lg:inline'>Kids</p>
				<BellIcon className='h-6 w-6' />
				<Link href='/account'>
					<img
						src='https://rb.gy/g1pwyx'
						alt='profile'
						className='cursor-pointer rounded'
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;
