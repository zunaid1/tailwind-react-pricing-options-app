import React from 'react';
import Link from './Link';

//import { Menu } from 'lucide-react';




const Navbar = () => {

	const navigationData = [
		{ id: 1, name: "Home", path: "/" },
		{ id: 2, name: "About", path: "/about" },
		{ id: 3, name: "Services", path: "/services" },
		{ id: 4, name: "Blog", path: "/blog" },
		{ id: 5, name: "Contact", path: "/contact" }
	];



	return (
		<nav className='flex justify-between mx-auto w-11/12'>
			<h1 className='font-bold text-2xl'>Brand Name</h1>


			<ul className='flex gap-2'>
				{
					navigationData.map(route => <Link
						key={route.id}
						route={route}>
					</Link>)
				}

				{/* 
				{
					navigationData.map(route => <li key={route.id} className='mr-10'><a href={route.path}>{route.name}</a></li>)
				} */}

			</ul>

			<button>Login</button>

		</nav>
	);
};

export default Navbar;