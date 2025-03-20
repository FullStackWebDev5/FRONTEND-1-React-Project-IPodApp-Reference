import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Screen from './components/Screen'
import Wheel from './components/Wheel'

function App() {
  const OPTIONS = ['Music', 'Games', 'Settings']
  const [showMenu, setShowMenu] = useState(false)
  const [activeOptIndex, setActiveOptIndex] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState('')

  const handleIndexChange = (index) => {
    if(index == OPTIONS.length) {
      index = 0
    } else if(index == -1) {
      index = OPTIONS.length - 1
    }
    setActiveOptIndex(index)
  }

  return (
    <div className='ipod-container p-2'>
      <Screen 
        OPTIONS={OPTIONS} 
        showMenu={showMenu} 
        activeOpt={OPTIONS[activeOptIndex]}
        selectedOpt={selectedOpt}
      />
      <Wheel 
        setShowMenu={setShowMenu} 
        activeOptIndex={activeOptIndex}
        handleIndexChange={handleIndexChange}
        setSelectedOpt={setSelectedOpt}
        handleOptionSelect={() => {
          setSelectedOpt(OPTIONS[activeOptIndex])
        }}
      />
    </div>
  )
}

export default App
