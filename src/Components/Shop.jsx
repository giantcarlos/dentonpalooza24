import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
      <section id="shop" className="shop-grid">
        <div className="tickets">
            <h3>TICKETS</h3>
            <h4>Each ticket is priced at $20</h4>
            <h4><a href="https://www.prekindle.com/event/49535-dentonpalooza-4-denton" target="_blank">BUY TICKETS ➤</a></h4>
        </div>
        <div className="merch">
            <h3>MERCHANDISE</h3>
            <h4>Stay tuned for upcoming merchandise.</h4>
            <h4>COMING SOON</h4>
        </div>
        <div className="beneficiaries">
            <h2>BENEFICIARIES</h2>
            <h4>All funds raised are distributed evenly between our beneficiaries.</h4>
            <h4><a href="https://dmacdenton.org/" target="_blank">DMAC ➤</a> / <a href="https://theartroomdenton.org/" target="_blank">THE ART ROOM ➤</a> / <a href="https://leukemiatexas.org/" target="_blank">LEUKEMIA TEXAS ➤</a></h4>
        </div>
      </section>
    )
  }
}
