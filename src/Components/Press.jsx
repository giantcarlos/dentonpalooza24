import React, { Component } from 'react'

export default class Press extends Component {
  render() {
    return (
      <section id="press" className="press">
        <h2>PRESS FOR DENTONPALOOZA 4</h2>
        <div className="press-grid">
            <a className="press-card" href="https://dentonrc.com/entertainment/dentonpalooza-4-books-dentons-mad-max-truck-invites-mayor-to-sing-nu-metal-onstage-and/article_3f17c2a2-2c1d-11ef-9010-f3ac1b7b25c4.html" target="_blank">
                <div className="press-image">
                    <img src="https://bloximages.newyork1.vip.townnews.com/dentonrc.com/content/tncms/assets/v3/editorial/b/a0/ba0c019e-2c1d-11ef-8551-37aea93f8aad/653f243f5ec69.image.jpg?resize=750%2C500" className="image-gray" alt='Joey Liechty on stage at Dentonpalooza 3' />
                </div>
                <div className="press-title">Dentonpalooza 4 Books Denton's Mad Max Truck, Invites Mayor to Sing Nu-Metal Onstage and More Oddities</div>
                <div className="press-details">Juan Betancourt / Denton Record-Chronicle</div>
                <div className="press-date">6.18.24</div>
            </a>
            <a className="press-card" href="" target="_blank">
                <div className="press-image">
                    <img src="" className="image-gray" alt='' />
                </div>
                <div className="press-title"></div>
                <div className="press-details"></div>
                <div className="press-date"></div>
            </a>
        </div>
      </section>
    )
  }
}
