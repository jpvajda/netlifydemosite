import React from 'react'
import ReactDOM from 'react-dom'

function App() { 
  const [count, setCount] = React.useState(0)

  return (
    <div>
      Hello from React!
      <button onClick = {() => setCount(count +1)}>Click Me! {count}</button>
    </div>
  )
}

function Text() { 
  const [text, setText] = React.useState('')
  React.useEffect(() => { 
    fetch('/netlify/functions/node-fetch.js')
      .then((x) => x.json())
      .then((x) => setText(x.message))
  })
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('app'))
ReactDOM.render(<Text></Text>, document.getElementById('text'))
