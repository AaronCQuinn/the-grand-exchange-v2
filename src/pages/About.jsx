import React from 'react'
import Navbar from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {
    return (
        <div className='h-screen flex flex-col'>
        <Navbar />
        <div className="m-auto container">
          <div className='grid grid-cols-1 w-11/12 mx-auto gap-5 md:grid-cols-2'>
          <AnimatePresence>
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
                <div className='text-5xl'>
                    React App built by Aaron Quinn.
                    <div className='text-base mt-2'>
                    Purpose of the single page application was to build a portfolio project which included API calls, build skill with using React, and implement data visualization through graphing.
                    </div>
                </div>
            </motion.div>



        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="flex flex-col w-full">
                <div className='place-self-center text-2xl underline mb-2'>
                    Packages and Technology Used In This Project
                </div>
                <ul className='list-inside place-self-center w-full text-center'>
                    <li>React</li>
                    <li>Tailwind</li>
                    <li>Axios</li>
                    <li>Framer Motion</li>
                    <li>Apex Charts</li>
                    <li>React-router-dom</li>
                </ul>
            </div>
        </motion.div>
        </AnimatePresence>
          </div>
        </div>
      </div>
    )
}

export default About