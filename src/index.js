import React from 'react'
import ReactDOM from 'react-dom'
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init()

function App() { 
  const [count, setCount] = React.useState(0)
  
  const handleClick = () => { 
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => { 
      console.log('welcome', user)
    })
  }

  const handleClick2 = () => { 
    const user = netlifyIdentity.currentUser() 
    fetch('/.netlify/functions/protected-function', { 
      headers: { 
        Authorization: 'Bearer ' + user.token.access_token, 
      },
    })
    .then((x) => x.json())
    .then(console.log)
  }
  const user = netlifyIdentity.currentUser()
  return (
    <div>
      Hello from React!
      <button onClick = {() => setCount(count +1)}>Click Me! {count}</button>
      <button onClick = {handleClick}>login</button>
      <button onClick = {handleClick2}>AuthFunction</button>

    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('app'))

