import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
      <section className="shop-grid">
        <div id="tickets" className="tickets">
            <h3>TICKETS</h3>
            <h4 className="small-text">Each ticket is priced at $20</h4>
            <h4><a href="https://www.prekindle.com/event/49535-dentonpalooza-4-denton" target="_blank">BUY TICKETS ➤</a></h4>
        </div>
        <div id="merch" className="merch">
            <h3>MERCHANDISE</h3>
            <h4 className="small-text">Stay tuned for upcoming merchandise</h4>
            <h4>COMING SOON</h4>
        </div>
        <div className="beneficiaries">
            <h3>BENEFICIARIES</h3>
            <h4 className="small-text">All funds raised benefit these charities</h4>
            <h4><a href="https://dmacdenton.org/" target="_blank">DMAC ➤</a> / <a href="https://theartroomdenton.org/" target="_blank">THE ART ROOM ➤</a> / <a href="https://leukemiatexas.org/" target="_blank">LEUKEMIA TEXAS ➤</a></h4>
        </div>
      </section>
    )
  }
}
