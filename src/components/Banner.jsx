import React from 'react'
import Splash from '../assets/fruits-splash.png'
import { motion } from "framer-motion"
import { FadeUp } from '../utility/animation'

const Banner = () => {
  return (
    <section className='bg-secondary/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* Banner Image */}
            <div className='flex justify-center items-center'>
            <motion.img 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ type: "spring", stiffness:100, delay: 0.2}}
            viewport={{ once: true }}
            src={ Splash } alt="Fruits-Splash" className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'/>
            </div>

            {/* Brand Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-3xl lg:text-5xl font-semibold uppercase'>Brand Info</motion.h1>
                <motion.p 
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>The Fruit Splash Shop is your one-stop destination for the freshest and most delicious fruits, refreshing fruit juices, smoothies, and a variety of fruit-based products.
                Mission: To provide high-quality, organic, and locally sourced fruits while promoting a healthy and sustainable lifestyle.</motion.p>
                <motion.p 
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >Fresh Fruits: A wide selection of seasonal and exotic fruits, including apples, bananas, berries, citrus fruits, and tropical varieties. Fruit Juices and Smoothies: Freshly squeezed juices and smoothies made to order with no added sugars or preservatives.
                Dried Fruits and Nuts: A range of dried fruits like apricots, raisins, and cranberries, along with assorted nuts. Fruit Baskets: Customizable fruit baskets for gifts, special occasions, or corporate events. Healthy Snacks: Fruit bars, fruit chips, and other healthy, fruit-based snacks.</motion.p>

                <motion.div 
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='flex justify-center md:justify-start'>
                <button className='primary-btn'>Learn More</button>
                

                </motion.div>

                
                </div>


            </div>
        </div>
    </section>
  )
}

export default Banner