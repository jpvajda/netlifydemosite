import React from 'react'
import ReactDOM from 'react-dom'

function Form() { 
  const [count, setCount] = React.useState(0)

  return (
    <div> 
    <form name="contact" data-netlify-recaptcha="true" netlify-honeypot="bot-field" netlify action="/thankyou">
      <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <label>File <input type="file" name="fccfile"/></label>
      </p>
        <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
  )
}

ReactDOM.render(<Form></Form>, document.getElementById('form'))