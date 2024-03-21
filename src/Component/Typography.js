import React from 'react'

function Typography({title,children}) {
  return (
    <div className='title'>
        {title} {children}
    </div>
  )
}

export default Typography