import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-detail">Follow us on Instragram&nbsp;
          <a href='https://www.instagram.com/dentonpalooza/' target="_blank">@dentonpalooza</a>
        </div>
        <div className="footer-detail">Website designed and maintained by&nbsp;
          <a href='https://www.giantcarlos.com/' target="_blank">Gian Carlos</a>
        </div>
      </section>
    )
  }
}
