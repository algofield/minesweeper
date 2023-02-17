import React, { useState } from 'react'
import '../styles/style.css'
import utils from '../util'
import Board from './Board'


const App = function App(props) {
  let [squares, updateSquares] = useState(utils.buildBoard())
  let [visibility, updateVisibility] = useState(Array.from({ length: 100 }, (_, i) => false))
  let [gameState, updateGameState] = useState(0)
  let [flags, updateFlags] = useState(Array.from({ length: 100 }, (_, i) => ''))
  let [clickState, updateClickState] = useState(false)

  const clickHandler = (index) => {
    if (gameState > 0) return;
    if (clickState) {
      // flagging
      let fl = flags.slice()
      fl[index] = '🚩'
      updateFlags(fl)
    } else {
      let vis = visibility.slice()
      let fl = flags.slice()
      if (squares[index] === 'b') {
        vis = vis.map(b => true)
        fl = fl.map(s => '')
        updateGameState(1)
      } else {
        vis[index] = true
        fl[index] = ''
        const squaresToShow = utils.walkBoard(squares, index)
        for (const idx of squaresToShow) {
          if (!fl[index]) {
            vis[idx] = true
          }
        }
      }
      updateFlags(fl)
      updateVisibility(vis)
      if (vis.filter(x => !x).length === 10) {
        updateGameState(2)
      }
    }
  }

  const restartGame = () => {
    updateGameState(0)
    updateVisibility(Array.from({ length: 100}, (_, i) => false))
    updateSquares(utils.buildBoard())
    updateFlags(Array.from({ length: 100 }, (_, i) => ''))
  }

  const toggleFlagging = () => {
    updateClickState(!clickState)

  }

  return (
    <div className='page-container'>
      <h1 className='title'>Minesweeper</h1>
      <div className="btn-box">
        <button className='btn flag-btn' onClick={(e) => (e.preventDefault(), toggleFlagging())}> 🚩 is {clickState ? 'On': 'Off'}</button>
        <button className='btn' onClick={(e) => (e.preventDefault(), restartGame())}>New Game</button>
      </div>
      <Board squares={squares} visibility={visibility} flags={flags} onClick={clickHandler} />
      {
        gameState > 0 ? (
          <div className="modal">
            <h1 className='title'>{gameState === 1 ? 'Game Over' : gameState === 2 ? 'You Won!' : ''}</h1>
            <button className='btn' onClick={(e) => (e.preventDefault(), restartGame())}>New Game</button>
          </div>
        ) : (
          <React.Fragment>
          </React.Fragment>
        )
      }
    </div>
  )
}

export default App