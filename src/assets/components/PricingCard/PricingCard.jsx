import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {

	console.log(pricing)
	const {name, price, description, features,popular} = pricing;
	return (
		
		<div className='border bg-blue-50 rounded p-4 flex flex-col'>
			{/* Card Hearder */}
			<div className='text-center'>
			<div className='flex text-center justify-center items-center'>
				<h1 className='text-5xl font-bold'>{name}
			</h1>
			<p>
			{popular && <span className='badge badge-xs badge-warning p-3 text-black font-bold text-[16px]'>Most Popular</span>}
			</p>
				</div>


			<h4 className='text-3xl'>$ {price}</h4>

		</div>
		{/* Card body */}
		<div className='flex-1 '>
			<p className='bg-blue-200 p-4 rounded-3xl mt-2'>
				{
					description
				}
			</p>
			<div className='space-y-2 flex flex-col flex-grow basis-[200px]'>
			{
				features.map((feature,index) => 
				<PricingFeature  
					key={index}
					feature={feature}>
					</PricingFeature>)
			}
			</div>
		</div>
		<button className='btn w-full mt-4 bg-blue-500 text-white'>Subscribe</button>
		</div>
	);
};

export default PricingCard;