import React, { useState } from 'react'
import '../styles/style.css'
import buildBoard from '../util'
import Board from './Board'


const App = function App(props) {
  let [count, updateCount] = useState(0)

  // let squares = Array.from({ length: 100 }, (_, i) => i)
  let squares = buildBoard()

  let clickHandler = (index) => console.log(index)

  return (
    <div className='page-container'>
      <h1 className='title'>Minesweeper</h1>
      <div className="btn-box">
        <button className="btn" onClick={(e) => (e.preventDefault(), updateCount(count + 1))}>
          +
        </button>
        <button className="btn" onClick={(e) => (e.preventDefault(), updateCount(count - 1))}>
          -
        </button>
        <button className="btn" onClick={(e) => (e.preventDefault(), updateCount(0))}>
          reset
        </button>
      </div>
      <Board squares={squares} onClick={clickHandler} />
    </div>
  )
}

export default App