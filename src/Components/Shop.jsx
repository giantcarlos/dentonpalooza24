import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
      <div className="shop-grid">
        <div className="tickets">
            <h3>TICKET INFORMATION</h3>
            <p>Each ticket is priced at $20</p>
            <p>Funds raised are distributed evenly between DMAC, The Art Room, and Leukemia Texas.</p>
            <h3>BUY TICKETS</h3>
        </div>
        <div className="merch">
            <h3>MERCHANDISE</h3>
            <p>Stay tuned for upcoming merchandise.</p>
            <h3>COMING SOON</h3>
        </div>
      </div>
    )
  }
}