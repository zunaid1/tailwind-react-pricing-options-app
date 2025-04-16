// import React from 'react';

const Link = ({ route }) => {

	const { path, name } = route;

	return (
		<li className='text-2xl bg-amber-800 text-white'>
			<a href={path}>{name}</a>
		</li>
	);
};

export default Link;