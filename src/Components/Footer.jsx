import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Footer extends Component {
  render() {
    return (
      <motion.section initial={{ opacity: 0, y: 224 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .375 }} viewport={{ margin: "224px", once: true }}className="footer">
        <div className="footer-social">Follow us on Instragram&nbsp;
          <a href='https://www.instagram.com/dentonpalooza/' target="_blank">@dentonpalooza</a>
        </div>
        <div className="footer-dev">Website designed and maintained by&nbsp;
          <a href='https://www.giantcarlos.com/' target="_blank">Gian Carlos</a>
        </div>
      </motion.section>
    )
  }
}
