import React from 'react';
import {Link} from 'react-router-dom'
import CoinIcon from '../assets/Coins_10000.png'

function Navbar({title}) {
  return (
    <nav className='navbar shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
            <div className='flex-1 mx-4 px-4 align-middle'>
                <Link to='/' className='text-lg font-bold'>
                    <img src={CoinIcon} alt="" className='inline mr-1' />
                    {title}
                </Link>
            </div>
            <div className="px-2 mx-2 flex-1 justify-end hidden md:flex">
                <Link to='/' className="btn btn-ghost">
                    Home
                </Link>
                <Link to='/about' className="btn btn-ghost rounded-btn">
                    About
                </Link>
            </div>

        <div className="md:hidden px-2 mx-2">
            <div className="dropdown dropdown-end">
                <div tabIndex="0" className="btn btn-ghost rounded-btn align-middle">
                    <label htmlFor="my-drawer-3" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>    
                </div> 
                    <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-200 rounded-box w-52">
                        <li>
                        <Link to='/about' className="btn btn-ghost rounded-btn">
                            About
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
};

Navbar.defaultProps = {
    title: 'The Grand Exchange'
}

export default Navbar;

