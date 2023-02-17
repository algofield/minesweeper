import React from 'react'

const Square = function Square ({ value, flag, isVisible, onClick }) {
  const style = isVisible ? `square visible` : `square`

  return (
    <button className={style} onClick={onClick}>
      {flag ? flag : isVisible ? value === 'b' ? '💣' : value : ''}
    </button>
  )
}

export default Square