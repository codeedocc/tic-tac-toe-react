import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Box from './components/Box'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)

  function clickHandler(boxId: number) {
    const updatedBoard = board.map((el, idx) => {
      if (idx === boxId) {
        return xPlaying ? 'X' : 'O'
      } else {
        return el
      }
    })

    setBoard(updatedBoard)
    setXPlaying((prev) => !prev)
  }

  return (
    <div className="App">
      <Board board={board} clickHandler={clickHandler} />
    </div>
  )
}

export default App
