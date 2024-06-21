import React from 'react'

const Footer = () => {
  return (
   <>
    <div className="footer ">
        <div className="grid sm:grid-cols-4 border-t border-gray-800 py-8 px">
            <div className="box ">
                <img src="/navbarlogo.svg" alt="" />
                {/* <h1 >social media icons</h1> */}
                <img className='mt-14' src="/socialmediaicons.png" alt="" />
                {/* <h4 className='mt-10 text-sm'>© Moon Rooster LLC. All rights reserved.</h4> */}
            </div>
            <div className="box-about hidden  sm:block ">
            <h1 className='font-bold'>About Us</h1>
             <h5 className='text-base mt-5'>About</h5>
             <h5 className='text-base mt-5'>Careers</h5>
             <h5 className='text-base mt-5'>Blog</h5>
             <h5 className='text-base mt-5'>Legal & privacy</h5>
         
            </div>
       
            <div className="box-about hidden sm:block">
            <h1 className='font-bold'>Services</h1>
             <h5 className='text-base mt-5'>Aplications</h5>
             <h5 className='text-base mt-5'>Medical</h5>
             <h5 className='text-base mt-5'>Affilliate</h5>
             <h5 className='text-base mt-5'>Institutional Services</h5>
         
            </div>
            <div className="box-about hidden  sm:block">
            <h1 className='font-bold'>Learn</h1>
             <h5 className='text-base mt-5'>What is Medical?</h5>
             <h5 className='text-base mt-5'>Natu Basic</h5>
             <h5 className='text-base mt-5'>Tips and Tutorials</h5>
             <h5 className='text-base mt-5'>Market Update</h5>
         
            </div>
       
        </div>
    </div>
   </>
  )
}

export default Footer