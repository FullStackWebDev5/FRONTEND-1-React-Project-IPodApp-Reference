import { useEffect } from 'react';
import './index.css'
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { HiMiniPlayPause } from "react-icons/hi2";

const Wheel = ({ setShowMenu }) => {
  useEffect(() => {
    const ipodBtns = document.getElementsByClassName('ipod-btns')
    
    let prevBtn = 'menu-btn'
    let currBtn = 'menu-btn'
    const allBtns = ['menu-btn', 'prev-btn', 'next-btn', 'play-btn']
    for(let i = 0; i < ipodBtns.length; i++) {
      ipodBtns[i].addEventListener('mouseover', (event) => {
        if(allBtns.includes(event.target.id)) {
          currBtn = event.target.id
          console.log(event.target, currBtn)

          if(
            (prevBtn == 'menu-btn' || currBtn == 'next-btn') ||
            (prevBtn == 'next-btn' || currBtn == 'play-btn') ||
            (prevBtn == 'play-btn' || currBtn == 'prev-btn') ||
            (prevBtn == 'prev-btn' || currBtn == 'menu-btn')
          ) {
            console.log('Clockwise direction')
          }

          if(
            (prevBtn == 'menu-btn' || currBtn == 'prev-btn') ||
            (prevBtn == 'prev-btn' || currBtn == 'play-btn') ||
            (prevBtn == 'play-btn' || currBtn == 'next-btn') ||
            (prevBtn == 'next-btn' || currBtn == 'menu-btn')
          ) {
            console.log('Ant-clockwise direction')
          }
        }
      })
    }
  }, [])

  return (
    <div className='wheel-container d-flex justify-content-center align-items-center'>
      <div className='wheel bg-white d-flex justify-content-center align-items-center'>
        <div className='select-btn'></div>
        <div 
          className="ipod-btns" 
          id='menu-btn'
          onClick={() => setShowMenu(true)}>
          Menu
        </div>
        <div className="ipod-btns" id='prev-btn'>
          <TbPlayerTrackPrevFilled />
        </div>
        <div className="ipod-btns" id='next-btn'>
          <TbPlayerTrackNextFilled />
        </div>
        <div className="ipod-btns" id='play-btn'>
          <HiMiniPlayPause />
        </div>
      </div>
    </div>
  )
}

export default Wheel