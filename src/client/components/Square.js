import React from 'react'

const Square = function Square ({ value, isVisible, onClick }) {
  const style = isVisible ? `square visible` : `square`

  return (
    <button className={style} onClick={onClick}>
      {isVisible ? value : ''}
    </button>
  )
}

export default Square