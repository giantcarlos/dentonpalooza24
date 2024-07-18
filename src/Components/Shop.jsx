import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Shop extends Component {
  render() {

    const container = {
      show: {
        transition: {
          delayChildren:.25,
          staggerChildren: 0.075
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

    return (
      <section className="shop-grid">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ margin: "100px", once: true }} id="tickets" className="tickets">
            <motion.h3 variants={item}>TICKETS</motion.h3>
            <motion.h4 variants={item} className="small-text">Each ticket is priced at $20</motion.h4>
            <motion.h4 variants={item}><a href="https://www.prekindle.com/event/49535-dentonpalooza-4-denton" target="_blank">BUY TICKETS ➤</a></motion.h4>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ margin: "100px", once: true }} id="merch" className="merch">
            <motion.h3 variants={item}>MERCHANDISE</motion.h3>
            <motion.h4 variants={item} className="small-text">Stay tuned for upcoming merchandise</motion.h4>
            <motion.h4 variants={item}>COMING SOON</motion.h4>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ margin: "100px", once: true }} className="beneficiaries">
            <motion.h3 variants={item}>BENEFICIARIES</motion.h3>
            <motion.h4 variants={item} className="small-text">All funds raised benefit these organizations</motion.h4>
            <motion.h4 variants={item}><a href="https://dmacdenton.org/" target="_blank">DMAC ➤</a> / <a href="https://theartroomdenton.org/" target="_blank">THE ART ROOM ➤</a> / <a href="https://leukemiatexas.org/" target="_blank">LEUKEMIA TEXAS ➤</a></motion.h4>
        </motion.div>
      </section>
    )
  }
}
