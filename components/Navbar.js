import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
<>
<div className="navbar grid pt-4 grid-cols-2 items-center justify-between text-white">
<Link href="/">
        <img src="/navbarlogo.svg" alt="" />
        </Link>
        <div className="   flex justify-end items-center ">
        <div className="cta  flex items-center gap-2 sm:gap-3">
          <button className="border border-white rounded-3xl px-2 text-sm md:text-lg sm:px-5 sm:py-2">
            Sign in
          </button>
          <button className=" btn-bg-gradient rounded-3xl px-2 text-sm md:text-lg sm:px-5 sm:py-2">
            Sign Up
          </button>
          </div>
        </div>
    
          {/* <h1  className="hamburger sm:hidden flex justify-end">nav</h1> */}
      </div>
</>
  )
}

export default Navbar