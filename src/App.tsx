import React from 'react'
import './App.css'
import Board from './components/Board'
import Box from './components/Box'

function App() {
  const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

  function clickHandler() {}

  return (
    <div className="App">
      <Board board={board} clickHandler={clickHandler} />
    </div>
  )
}

export default App
