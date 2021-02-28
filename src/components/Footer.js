import React from 'react'
import './Footer.css'
import EmailLink from './EmailLink'
import FacebookLink from './FacebookLink'
import PaypalDonateButton from './PaypalDonateButton'

export default ({ facebookUrl, email }) => (
  <div>
    <h2 className="taCenter">
      { email && <EmailLink url={`mailto:${email}`} />}{" "}
      { facebookUrl && <FacebookLink url={facebookUrl} />}
      <PaypalDonateButton />
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
