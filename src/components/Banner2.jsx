import React from 'react'
import Plate from '../assets/fruit-plate2.png'
import { motion } from "framer-motion"
import { FadeUp } from '../utility/animation'

const Banner2 = () => {
  return (
    <section className=''>
        <div className="container grid grid-cols-1 space-x-0 md:grid-cols-2 md:space-x-0 py-14 md:py-24">
           
            {/* Brand Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-3xl lg:text-5xl font-semibold uppercase'>our online fruit store</motion.h1>
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
                Dried Fruits and Nuts: A range of dried fruits like apricots, raisins, and cranberries, along with assorted nuts.</motion.p>

                <motion.div 
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='flex justify-center md:justify-start'>
                <button className='primary-btn'>Download The App</button>
                </motion.div>
                </div>
            </div>
             {/* Banner Image */}
             <div className='flex justify-center items-center'>
             <motion.img 
             initial={{ opacity: 0, x: 200, rotate: 75 }}
             whileInView={{ opacity: 1, x: 0, rotate: 0}}
             transition={{ duration: 1, delay: 0.2}}
             viewport={{ once: true }}
             src={ Plate } alt="Plate" className='w-[400px] md:max-w-[400px] object-cover drop-shadow'/>
            </div>
        </div>
    </section>
  )
}

export default Banner2