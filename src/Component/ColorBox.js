import React from 'react'

export const ColorBox = ({color, children}) => {
  return (
    <div className='ColorBox' style={{
      backgroundColor: color
    }}>
      {children}
    </div>
  )
}
