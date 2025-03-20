import { useState } from 'react'
import './index.css'
import MenuOption from './MenuOption'
import Music from './Music'
import Games from './Games'
import Settings from './Settings'

const Screen = ({ 
  OPTIONS, 
  showMenu, 
  activeOpt, 
  selectedOpt 
}) => {
  return (
    <div className='screen-container'>
      {showMenu && (
        <>
          {!selectedOpt && (
            <div className='menu-container'>
              <ul>
                {OPTIONS.map((option, index) => (
                  <MenuOption 
                    key={index} 
                    text={option} 
                    isHighlighted={activeOpt == option}
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