import React, { Component } from 'react'

export default class Lineup extends Component {
  render() {
    return (
      <section id="lineup" className="lineup">
        <img className="books" src='https://i.imgur.com/N4vr26E.jpeg' alt='Books for Tall People sign at Recycled Books'></img>
        <img className="poster" src='https://i.imgur.com/s993AaR.jpeg' alt='Lineup poster for Dentonpalooza 4'></img>
        <h1 className="ticket-text">Set times coming soon!</h1>
        <h2 className="ticket-text2">Check back closer to the event.</h2>
      </section>
    )
  }
}
