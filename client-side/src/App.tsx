import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavbarComponent from './base_common/components/navbar-component/navbar-component'
import FooterComponent from './base_common/components/footer-component/footer-component'
import HomeComponent from './components/home/home-component'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	<NavbarComponent />
	<HomeComponent/>	
	<div className='container'>
		<FooterComponent />
	</div>
	
	</>
  )
}

export default App
