import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Lineup extends Component {
  render() {

    let variants = {};
    const isMobile = window.innerWidth < 900;
    if (!isMobile) {
      variants = {
        start: { opacity: 0 },
        end: { opacity: 1 }
      }}

    return (
      <section id="lineup" className="lineup">
        <img className="books" src='https://i.imgur.com/e1wxIZC.jpeg' alt='Books for Tall People sign at Recycled Books'></img>
        <motion.img variants={variants} initial="start" whileInView="end" transition={{duration: .75}} viewport={{ once: true }} className="poster" src='https://i.imgur.com/XG1Qgto.png' alt='Lineup poster for Dentonpalooza 4'></motion.img>
        <div className="schedule">
            <h3 className="schedule-title">SCHEDULE</h3>
            <div className="press-details">4:00pm -- Doors Open</div>
            <div className="press-details">4:30pm -- Sidewalk Chalk Art Expo (we provide the chalk, you decorate the patio grounds)</div>
            <div className="press-details">6:00pm -- Transgender Storytime w/&nbsp;
            <a href='https://lovetothemax.net/' target="_blank">Amber Briggle</a>&nbsp;(inside stage)</div>
            <div className="press-details">6:30pm --&nbsp;
            <a href='https://linktr.ee/auratheband' target="_blank">Aura</a>&nbsp;(patio)</div>
            <div className="press-details">7:00pm --&nbsp;
            <a href='https://darstar.bandzoogle.com/' target="_blank">Darstar</a>&nbsp;(patio)</div>
            <div className="press-details">8:00pm --&nbsp;
            <a href='https://www.danielmarkhammusic.com/' target="_blank">Daniel Markham</a>&nbsp;(patio) & <a href='https://dannydiamonds.bandcamp.com/album/the-grand-cafe' target="_blank">Daniel Rush Folmer</a>&nbsp;(inside stage)</div>
            <div className="press-details">9:00pm -- Costume Contest Hosted by <a href='https://www.goddessgoddard.com/' target="_blank">Goddess Goddard</a>&nbsp;(patio)</div>
            <div className="press-details">9:30pm -- A Special Message From the Internet + T-Shirt Cannon</div>
            <div className="press-details">10:00pm --&nbsp;
            <a href='https://bravecombo.com/' target="_blank">The Carl Finch Sound</a>&nbsp;(patio)</div>
            <div className="press-details">11:00pm --&nbsp;
            <a href='http://www.theriverboatgamblers.com/' target="_blank">Riverboat Gamblers</a>&nbsp;(patio)</div>
            <div className="press-details">1:00am -- End of Show</div>
          </div>
      </section>
    )
  }
}
