import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Sponsors extends Component {
  render() {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren:.5,
          staggerChildren: 0.1125
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="image-grid">
            <motion.a variants={item} href='https://www.missangelinesdenton.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/GBB5S1l.png"} alt='logo of Miss Angelines' /></motion.a>
            <motion.a variants={item} href='https://www.barnhartsbarbershop.com/' className='image-gray' target="_blank"><img src={"https://i.imgur.com/nJXwjip.png"} alt='logo of Barnharts Barbershop' /></motion.a>
            <motion.a variants={item} href='https://danssilverleaf.com/' className='image-reverse-gray-zoom1' target="_blank"><img src={"https://i.imgur.com/lU9nHkR.png"} alt='logo of Dans Silverleaf' /></motion.a>
            <motion.a variants={item} href='https://www.eastsidedtx.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/CWrmgQg.jpg"} alt='logo of Eastside' /></motion.a>
            <motion.a variants={item} href='https://www.familylaw-tx.com/' className='image-reverse-gray-out' target="_blank"><img src={"https://i.imgur.com/dqU12Pm.jpeg"} alt='logo of MBH Family Law' /></motion.a>
            <motion.a variants={item} href='https://www.morefuncomicsandgames.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/gTzwN6j.png"} alt='logo of More Fun Comics and Games' /></motion.a>
            <motion.a variants={item} href='https://oakstreetdrafthouse.com/' className='image-reverse-gray-zoom1' target="_blank"><img src={"https://i.imgur.com/s3YiI14.png"} alt='logo of Oak Street Drafthouse' /></motion.a>
            <motion.a variants={item} href='https://rahrbrewing.com/' className='image-reverse-gray-zoom0' target="_blank"><img src={"https://i.imgur.com/ZJaZOZ1.png"} alt='logo of Rahr & Sons' /></motion.a>
            <motion.a variants={item} href='http://recycledbooks.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/taLVz7q.png"} alt='logo of Recycled Books' /></motion.a>
            <motion.a variants={item} href='https://rubberglovesdenton.com/' className='image-reverse-gray-zoom3' target="_blank"><img src={"https://i.imgur.com/6ZhmD7H.png"} alt='logo of Rubber Gloves' /></motion.a>
        </motion.div>
    )
  }
}
