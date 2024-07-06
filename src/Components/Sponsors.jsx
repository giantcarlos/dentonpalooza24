import React, { Component } from 'react'

export default class Sponsors extends Component {
  render() {
    return (
        <div className="image-grid">
            <div className="message">A big thanks to our sponsors!</div>
            <a href='https://www.barnhartsbarbershop.com/' className='image-gray' target="_blank"><img src={"https://i.imgur.com/nJXwjip.png"} alt='logo of Barnharts Barbershop' /></a>
            <a href='https://www.morefuncomicsandgames.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/k8Vheyt.png"} alt='logo of More Fun Comics and Games' /></a>
            <a href='http://recycledbooks.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/6F5XWoE.png"} alt='logo of Recycled Books' /></a>
            <a href='https://rubberglovesdenton.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/6ZhmD7H.png"} alt='logo of Rubber Gloves' /></a>
        </div>
    )
  }
}
