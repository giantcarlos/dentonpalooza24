import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Images extends Component {
  render() {
    const item = {
      hidden: { y: 400 },
      show: { y: 0 },
      trans: { }
    }
    return (
      <motion.div variants={item} initial="hidden" animate="show" transition={{duration: 1}} className='image-container'>
        <div className='pic' id='pic2' alt="Everything is Terrible on stage."/>
        <div className='pic' id='pic1' alt="Singer of Riverboat Gamblers crowdsurfing." />
    </motion.div>
    )
  }
}
