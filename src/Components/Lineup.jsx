import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Lineup extends Component {
  render() {
    return (
      <section id="lineup" className="lineup">
        <img className="books" src='https://i.imgur.com/N4vr26E.jpeg' alt='Books for Tall People sign at Recycled Books'></img>
        <motion.img initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="poster" src='https://i.imgur.com/s993AaR.jpeg' alt='Lineup poster for Dentonpalooza 4'></motion.img>
        <h1 className="ticket-text">Set times coming soon!</h1>
        <h2 className="ticket-text2">Check back closer to the event.</h2>
      </section>
    )
  }
}
