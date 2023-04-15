import { useState } from 'react'

import { useStore } from './contexts/Store'

function App() {
  const { setCart, cart } = useStore()
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <p>{ cart }</p>
    </div>
  )
}

export default App
