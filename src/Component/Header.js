import React from 'react'
import arrowIcon from '../Assets/arrow_back.svg'

export default function Header({title,handleClose}) {
  return (
    <div className='header'>
        <div className='header-wrapper' onClick={handleClose}>
            <img src={arrowIcon} alt='left-arrow' className='arrowIcon'/>
            <h3>{title}</h3>
        </div>
    </div>
  )
}
