import React from 'react'
import BgBanner from '../assets/Banner-bg.jpg'
import { motion } from "framer-motion"
import { FadeLeft } from '../utility/animation'
import { IoBagHandleOutline } from "react-icons/io5"; 

const bgstyle = {
    backgroundImage: `url(${BgBanner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", 
};

const Banner3 = () => {
  return (
    <section className='container mb-12'>
        <div style= {bgstyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
            {/* Banner Image */}
            <div></div>

            {/* Brand Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-3xl lg:text-5xl font-semibold uppercase'>get fresh fruits today</motion.h1>
                <motion.p 
                variants={FadeLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>The Fruit Splash Shop is your one-stop destination for the freshest and most delicious fruits, refreshing fruit juices, smoothies, and a variety of fruit-based products.
                Mission: To provide high-quality, organic, and locally sourced fruits while promoting a healthy and sustainable lifestyle.</motion.p>
                <motion.div 
                variants={FadeLeft(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='flex justify-center md:justify-start'>
                <button className='primary-btn flex gap-2 items-center'><IoBagHandleOutline />Order Now</button>
                

                </motion.div>

                
                </div>


            </div>
        </div>
    </section>
  )
}

export default Banner3