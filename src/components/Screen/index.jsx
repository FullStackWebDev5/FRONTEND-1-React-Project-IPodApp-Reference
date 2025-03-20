import { useState } from 'react'
import './index.css'
import MenuOption from './MenuOption'
import Music from './Music'
import Games from './Games'
import Settings from './Settings'

const Screen = ({ showMenu }) => {
  const options = ['Music', 'Games', 'Settings']
  const [activeOpt, setActiveOpt] = useState('Music')
  const [selectedOpt, setSelectedOpt] = useState('')

  return (
    <div className='screen-container'>
      {showMenu && (
        <>
          {!selectedOpt && (
            <div className='menu-container'>
              <ul>
                {options.map((option, index) => (
                  <MenuOption 
                    key={index} 
                    text={option} 
                    isHighlighted={activeOpt == option}
                    setSelectedOpt={setSelectedOpt}
                  />
                ))}
              </ul>
            </div>
          )}
          {selectedOpt == 'Music' && <Music />}
          {selectedOpt == 'Games' && <Games />}
          {selectedOpt == 'Settings' && <Settings />}
        </>
      )}
    </div>
  )
}

export default Screen