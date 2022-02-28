import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
      <div className='h-screen flex flex-col'>
        <Navbar />
        <div className="m-auto text-5xl container">
          <div className='grid p-5 grid-cols-1 gap-5 text-left md:grid-cols-2'>
            <div>
              Uh-oh! <br /> Either you're lost, or we didn't get an item search for.
            </div>
            <button className="btn btn-wide btn-outline btn-accent place-self-center"> <Link to='/'> Homepage </Link></button>
          </div>
        </div>
      </div>
    )
}

export default Error