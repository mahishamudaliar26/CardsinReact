import { useState } from 'react'
import './App.css'
import Badge from './components/Badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Badge
        text="New Post"
        filled={true}/>
      </div>
    </>
  )
}

export default App
