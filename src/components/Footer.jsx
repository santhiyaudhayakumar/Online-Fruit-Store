import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <footer className='bg-primary/10 py-12 mt-10'>
        <div className="container flex justify-between items-center">
            {/* Logo Section */}
            <motion.div 
            initial= {{ opacity: 0 }}
            whileInView= {{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <p className='text-primary'>Fruit</p>
                <p className='text-secondary'>Store</p>
                <FaLeaf className='text-green-500' />
            </motion.div>

            {/* Social Icons */}
            <div className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
                <FaFacebook />
                <FaTwitter />
                <FaTwitter/>
            </div>
        </div>
    </footer>
  )
}

export default Footer