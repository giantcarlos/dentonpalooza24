import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Shop extends Component {
  render() {

    const container = {
      show: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

    return (
      <section className="shop-grid">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: .4, once: true }} id="tickets" className="tickets">
            <motion.h3 variants={item}>TICKETS</motion.h3>
            <motion.h4 variants={item} className="small-text">Each ticket is priced at $20</motion.h4>
            <motion.h4 variants={item} className="shop-link"><a href="https://www.prekindle.com/event/49535-dentonpalooza-4-denton" target="_blank">BUY TICKETS ➤</a></motion.h4>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: .4, once: true }} id="merch" className="merch">
            <motion.h3 variants={item}>MERCHANDISE</motion.h3>
            <motion.h4 variants={item} className="small-text">Dentonpalooza merch from our friends at Pan Ector</motion.h4>
            <motion.h4 variants={item} className="shop-link"><a href="https://www.panector.com/dentonpalooza-2024/p/style-01-ej5na-zc3d9" target="_blank">SHOP NOW ➤</a></motion.h4>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: .4, once: true }} className="beneficiaries">
            <motion.h3 variants={item}>BENEFICIARIES</motion.h3>
            <motion.h4 variants={item} className="small-text">All funds raised benefit these organizations</motion.h4>
            <motion.h4 variants={item} className="shop-link"><a href="https://dmacdenton.org/" target="_blank">DMAC ➤</a> / <a href="https://theartroomdenton.org/" target="_blank">THE ART ROOM ➤</a> / <a href="https://leukemiatexas.org/" target="_blank">LEUKEMIA TEXAS ➤</a></motion.h4>
        </motion.div>
      </section>
    )
  }
}
