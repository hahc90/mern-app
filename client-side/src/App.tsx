import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavbarComponent from './base_common/navbar-component/navbar-component'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NavbarComponent />
  )
}

export default App
