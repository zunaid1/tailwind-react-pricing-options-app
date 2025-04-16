
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import Navbar  from './assets/components/Navbar/Navbar'
import PricingOption from './assets/components/PricingOption/PricingOption';
// import PricingOption from './assets/components/PricingOptions/PricingOption'




const pricingPromise = fetch('pricingData.json').then(res => res.json());


function App() {

  return (

    <>
    <header>
    <Navbar></Navbar>
    </header>

    <main>
      <Suspense fallback={
           <span className="loading loading-ring loading-xl"></span>
      }>
       
       <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>
    </main>
    
    
    
    
    </>
  )
}

export default App
