import React from 'react'
import './Footer.css'
import FacebookLink from './FacebookLink'

export default () => (
  <div>
    <h2 className="taCenter">
      <FacebookLink url="https://www.facebook.com/LittleLightsHouston/" />
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Yellowcake starter theme by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
