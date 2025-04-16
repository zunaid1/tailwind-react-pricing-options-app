import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({pricingPromise}) => {
	const pricingData = use(pricingPromise)

	console.log(pricingData);

	return (
		<div>
			<h1 className='text-2xl font-bold'>Get Our Membership</h1>	
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{
					pricingData.map(pricing => <PricingCard 
						pricing={pricing}
						key={pricing.id}
						></PricingCard>)
				}
				
			</div>		
		</div>
	);
};

export default PricingOption;