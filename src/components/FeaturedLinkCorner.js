import React from 'react'
import FacebookLink from './FacebookLink'
import './FeaturedLinkCorner.css'
import PaypalDonateButton from './PaypalDonateButton'

export default ({ url, style, className = '' }) => (
  <div className="FeaturedLinkCorner">
    <PaypalDonateButton />
    <FacebookLink className={`${className}`} url={url} style={style} />
  </div>
)
