import React from 'react'
import FacebookLink from './FacebookLink'
import './FeaturedLinkCorner.css'

export default ({ url, style, className = '' }) => (
  <FacebookLink className={`FeaturedLinkCorner ${className}`} url={url} style={style} />
)
