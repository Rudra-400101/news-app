import React from 'react'

export default function loader(props) {
  return (
    <div>
      <img src={props.src} className='position-fixed bottom-50' alt='...'></img>
    </div>
  )
}
