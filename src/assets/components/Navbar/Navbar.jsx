import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

//import { Menu } from 'lucide-react';

const navigationData = [
	{ id: 1, name: "Home", path: "/" },
	{ id: 2, name: "About", path: "/about" },
	{ id: 3, name: "Services", path: "/services" },
	{ id: 4, name: "Blog", path: "/blog" },
	{ id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {
	const [open, setOpen] = useState(false);


	const Links = navigationData.map(route => <Link
		key={route.id}
		route={route}>
	</Link>)





	return (
		<nav className='flex justify-between mx-auto w-11/12 mt-2'>
			<span className='flex' onClick={() => setOpen(!open)}>
				{open? 
				<X className='md:hidden'></X> : 
				<Menu className='md:hidden'></Menu>}
				<ul className={`md:hidden bg-orange-200 absolute duration-2000 
				${open?
					'top-8' : '-top-50'
				} p-3 space-y-1.5`}>
					{
						Links
					}
				</ul>

			
			<h1 className='font-bold text-2xl ml-4'>Brand Name</h1>
			</span>
			<ul className='md:flex hidden gap-2 bg-blue-200'>
				{
					Links
				}
			</ul>

			<button>Login</button>

		</nav>
	);
};

export default Navbar;