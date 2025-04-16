import { CircleCheckBig } from 'lucide-react';
import React from 'react';


const PricingFeature = ({feature}) => {

	
	console.log(feature)
	return (
		<p className='flex mt-2 '>
			<CircleCheckBig className='mr-2 text-green-700'></CircleCheckBig>
			 {feature}
			
		</p>
	);
};

export default PricingFeature;