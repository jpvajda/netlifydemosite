import React from 'react'
import ReactDOM from 'react-dom'

function encode(data) { 
  const formData = new FormData()
  for (const key of Object.keys(data)) { 
    formData.append(key, data[key])
  }
  return formData
}

function Form() { 
  const [msg, setmsg] = React.useState(null)
  const handleSubmit = (e) => { 
    e.preventDefault()
    const form = e.target
    fetch('/', { 
      method: 'POST',
      body: encode ({ 
       'form-name': form.getAttribute('name'),
       name: form.name.value,
       email: form.email.value, 
      }),
    })
      .then(()=> setmsg('Success!'))
      .catch((error) => alert(error))
  }

  return (
    <div> 
    <form onSubmit={handleSubmit} name="contact" data-netlify-recaptcha="true" netlify-honeypot="bot-field">
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