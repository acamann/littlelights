import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Subscribe to Newsletter',
    action: '',
    successMessage: 'Thanks for subscribing to the Little Lights newsletter!',
    errorMessage: 'There is a problem & your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    // TODO: make this actually subscribe to mailchimp
    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, action } = this.props

    return (
      <form
        className="Form"
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=""
        netlify-recaptcha=""
      >
        {this.state.alert && (
          <div className="Form--Alert">{this.state.alert}</div>
        )}
        <div className="Form--Group">
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="First"
              name="firstname"
              required
            />
            <span>First</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Last"
              name="lastname"
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
            name="emailAddress"
            required
          />
          <span>Email address</span>
        </label>
        <input type="hidden" name="form-name" value={name} />
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
