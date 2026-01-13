import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <header className="h-16 bg-blue-600 flex px-20 items-center justify-between text-white">
          <div className='text-xl font-bold'>Logo</div>
          <ul className='flex space-x-8'>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
          </ul>
          <div className=' flex gap-4'>
            <button className='py-2 px-6 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-all duration-200'>Login</button>
              <button className='py-2 px-6 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-all duration-200'>Sign Up</button>
          </div>
    </header>
  )
}

export default Navbar
