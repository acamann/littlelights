import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import './Form.css'

class Form extends React.Component {
  state = {
    alert: '',
    disabled: false,
    first: '',
    last: '',
    email: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.disabled) return;

    console.log(this.state);
    this.setState({ disabled: true })
    addToMailchimp(
      this.state.email, 
      {
        FNAME: this.state.first,
        LMANE: this.state.last
      }
    ).then(({ msg, result }) => {
      if (result !== 'success') {
        throw msg
      }
      this.setState({ alert: msg })
    }).catch(err => {
      this.setState({ alert: err })
    }).finally(() => {
      this.setState({ disabled: false, first: '', last: '', email: '' })
    })
  }

  render() {
    return (
      <form
        className="Form"
        name="Subscribe to Newsletter"
        onSubmit={this.handleSubmit}
        data-netlify=""
        netlify-recaptcha=""
      >
        {this.state.alert && (
          <div className="Form--Alert" dangerouslySetInnerHTML={{ __html: this.state.alert}}></div>
        )}
        <div className="Form--Group">
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="First"
              name="first"
              value={this.state.first}
              onChange={(e) => this.setState({ first: e.target.value })}
              required
            />
            <span>First</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Last"
              name="last"
              value={this.state.last}
              onChange={(e) => this.setState({ last: e.target.value })}
              required
            />
            <span>Last</span>
          </label>
        </div>
        <label className="Form--Label">
          <input
            className="Form--Input Form--InputText"
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />
          <span>Email address</span>
        </label>
        <input
          className="Button Form--SubmitButton"
          type="submit"
          value="Subscribe"
          disabled={this.state.disabled}
        />
      </form>
    )
  }
}

export default Form