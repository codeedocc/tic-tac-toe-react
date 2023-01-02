import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Box from './components/Box'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  function clickHandler(boxId: number) {
    const updatedBoard = board.map((el, idx) => {
      if (idx === boxId) {
        return xPlaying ? 'X' : 'O'
      } else {
        return el
      }
    })

    checkWinner(updatedBoard)
    setBoard(updatedBoard)
    setXPlaying((prev) => !prev)
  }

  const checkWinner = (board: string[]) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i]

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x])
        return board[x]
      }
    }
  }

  return (
    <div className="App">
      <Board board={board} clickHandler={clickHandler} />
    </div>
  )
}

export default App
