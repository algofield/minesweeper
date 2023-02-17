import React, { useState } from 'react'
import '../styles/style.css'

const App = function App(props) {
  let [count, updateCount] = useState(0)

  return (
    <div className='page-container'>
      <h1 className='title'>the count is {count}</h1>
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
    </div>
  )
}

export default App