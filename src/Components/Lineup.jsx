import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Lineup extends Component {
  render() {

    let variants = {};
  const isMobile = window.innerWidth < 900;
  if (!isMobile) {
    variants = {
      start: { y: 175 },
      end: { y: 0 }
    }}

    return (
      <section id="lineup" className="lineup">
        <img className="books" src='https://i.imgur.com/N4vr26E.jpeg' alt='Books for Tall People sign at Recycled Books'></img>
        <motion.img variants={variants} initial="start" whileInView="end" transition={{duration: .425}} viewport={{ once: true }} className="poster" src='https://i.imgur.com/s993AaR.jpeg' alt='Lineup poster for Dentonpalooza 4'></motion.img>
        <h1 className="ticket-text">Set times coming soon!</h1>
        <h2 className="ticket-text2">Check back closer to the event.</h2>
      </section>
    )
  }
}
