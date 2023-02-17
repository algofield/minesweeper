import React, { useState } from 'react'
import '../styles/style.css'
import utils from '../util'
import Board from './Board'


const App = function App(props) {
  let [squares, updateSquares] = useState(utils.buildBoard())
  let [visibility, updateVisibility] = useState(Array.from({ length: 100}, (_, i) => false))
  let [gameState, updateGameState] = useState(0)

  let clickHandler = (index) => {
    if (gameState > 0) return;
    let vis = visibility.slice()
    if (squares[index] === 'b') {
      vis = vis.map(b => true)
      updateGameState(1)
    } else {
      vis[index] = true
      const squaresToShow = utils.walkBoard(squares, index)
      for (const idx of squaresToShow) {
        vis[idx] = true
      }
    }
    updateVisibility(vis)
    if (vis.filter(x => !x).length === 10) {
      updateGameState(2)
    }
  }

  let restartGame = () => {
    updateGameState(0)
    updateVisibility(Array.from({ length: 100}, (_, i) => false))
    updateSquares(utils.buildBoard())
  }

  return (
    <div className='page-container'>
      <h1 className='title'>Minesweeper</h1>
      <div className="btn-box">
        <button className='btn' onClick={(e) => (e.preventDefault(), restartGame())}>New Game</button>
      </div>
      <Board squares={squares} visibility={visibility} onClick={clickHandler} />
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