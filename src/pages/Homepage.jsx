// Component imports.
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import Greeting from '../components/Greeting';
import ErrorAlert from '../components/ErrorAlert'
import BackgroundVideo from '../assets/Background.mp4'

// Utility imports.
import { useNavigate } from 'react-router-dom';
import {data as itemData} from '../assets/names-ids'
import ItemContext from '../context/ItemContext';
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useContext } from 'react';

const Homepage = () => {
  const {setItem, setFetching} = useContext(ItemContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorToggle, seterrorToggle] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validItem = itemData.find(item => item.search_term === searchTerm);
    if (validItem) {
      setFetching(true);
      setItem(validItem);
      navigate(`/item/${validItem.id}`);
    } else {
      seterrorToggle(true);
    }
  }

  return (
    <div className='flex flex-col justify-between h-screen'>
        <video autoPlay loop muted className='absolute top-0 left-0 -z-10 min-w-full min-h-full opacity-30 invisible md:visible'>
          <source src={BackgroundVideo} type='video/mp4'></source>
          Your browser does not support the video tag.
        </video>
        <Navbar />
          <AnimatePresence>
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
              <div className="container mx-auto px-4">
                <div className='font-extrabold text-7xl mb-3'>
                  {<Greeting />}
                </div>
                <div className='text-xl pl-2 mb-3'>
                  Find historical item price data by searching below,
                </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-control">
                        <div className="relative">
                            <input type="text" 
                            placeholder="Search..." 
                            className='w-full input input-lg input-accent input-bordered' 
                            onChange={(e) => {
                              setItem('');
                              setSearchTerm(e.target.value.toLowerCase());
                              seterrorToggle(false);
                            }}
                            /> 
                            <button 
                            className='absolute top-0 right-0 rounded-l-none btn btn-lg btn-accent'
                            >GO</button>
                        </div>
                      </div>
                    </form>
                    <div>
                      {errorToggle && ErrorAlert({message: 'No item match found. Please use exact terms and spacing when searching.'})}
                    </div>
              </div>
            </motion.div>
          </AnimatePresence> 
        <Footer />
    </div>
  )
}

export default Homepage