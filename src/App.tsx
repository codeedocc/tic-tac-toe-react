import React, { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board/Board'
import ResetButton from './components/ResetButton/ResetButton'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'

const savedX = JSON.parse(localStorage.getItem('X') || '0')
const savedO = JSON.parse(localStorage.getItem('O') || '0')

const App: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [x, setX] = useState(savedX)
  const [o, setO] = useState(savedO)

  useEffect(() => {
    localStorage.setItem('X', x)
    localStorage.setItem('O', o)
  }, [scores.xScore, scores.oScore])

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

    const winner = checkWinner(updatedBoard)

    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores
        oScore += 1
        setScores({ ...scores, oScore })
        setO(Number(o) + 1)
      } else {
        let { xScore } = scores
        xScore += 1
        setScores({ ...scores, xScore })
        setX(Number(x) + 1)
      }
    }

    setBoard(updatedBoard)
    setXPlaying((prev) => !prev)
  }

  const checkWinner = (board: string[]) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i]

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} x={x} o={o} />
      <Board
        board={board}
        clickHandler={gameOver ? resetBoard : clickHandler}
      />
      <ResetButton resetBoard={resetBoard} />
    </div>
  )
}

export default App
