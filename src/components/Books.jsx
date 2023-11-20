import React, {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

function Books () {
  const {theme} = useContext(ThemeContext)
  return (
    <div className='book-list' style={{background: theme.bg, color:theme.syntax}}>
      <ul>
        <li style={{background: theme.ui}}>Can't hurt me</li>
        <li style={{background: theme.ui}}>48 laws of power</li>
        <li style={{background: theme.ui}}>Rich dad poor dad</li>
      </ul>
    </div>
  )
}

export default Books
