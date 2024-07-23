import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Sponsors extends Component {
  render() {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren:.375,
          staggerChildren: 0.2
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="image-grid">
            <motion.a variants={item} href='https://www.barnhartsbarbershop.com/' className='image-gray' target="_blank"><img src={"https://i.imgur.com/nJXwjip.png"} alt='logo of Barnharts Barbershop' /></motion.a>
            <motion.a variants={item} href='https://www.morefuncomicsandgames.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/k8Vheyt.png"} alt='logo of More Fun Comics and Games' /></motion.a>
            <motion.a variants={item} href='https://rahrbrewing.com/' className='image-reverse-gray-zoom2' target="_blank"><img src={"https://www.standardsalescompanylp.com/images/brands/rahr.png"} alt='logo of Rahr & Sons' /></motion.a>
            <motion.a variants={item} href='http://recycledbooks.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/6F5XWoE.png"} alt='logo of Recycled Books' /></motion.a>
            <motion.a variants={item} href='https://rubberglovesdenton.com/' className='image-reverse-gray-zoom3' target="_blank"><img src={"https://i.imgur.com/6ZhmD7H.png"} alt='logo of Rubber Gloves' /></motion.a>
            <motion.a variants={item} href='https://www.familylaw-tx.com/' className='image-reverse-gray-zoom' target="_blank"><img src={"https://i.imgur.com/arOxCaa.png"} alt='logo of MBH Family Law' /></motion.a>
        </motion.div>
    )
  }
}
