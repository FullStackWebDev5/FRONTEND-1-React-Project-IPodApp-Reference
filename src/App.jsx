import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Screen from './components/Screen'
import Wheel from './components/Wheel'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='ipod-container p-2'>
      <Screen showMenu={showMenu} />
      <Wheel setShowMenu={setShowMenu} />
    </div>
  )
}

export default App
