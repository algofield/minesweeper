import React from 'react'
import Square from './Square'

const Board = function Board({ squares, flags, visibility, onClick }) {
  
  return (
    <div className='board'>
      {
        squares.map((square, i) => (
          <Square key={i} value={square} flag={flags[i]} isVisible={visibility[i]} onClick={() => onClick(i)}/>
        ))
      }
    </div>
  )
}

export default Board