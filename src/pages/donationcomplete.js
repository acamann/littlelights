import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Helmet>
      <title>Thank you for your donation!</title>
    </Helmet>
    <section className="section thick">
      <div className="container skinny taCenter">
        <h1>Thank you for your donation!</h1>
        <p>
          Thank you for submitting your donation through PayPal to support Little Lights Houston.
        </p>
      </div>
    </section>
  </Layout>
)