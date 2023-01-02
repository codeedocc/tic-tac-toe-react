import React from 'react'
import Box from './Box'
import './Board.css'

interface IBoard {
  board: string[]
  clickHandler: (idx: number) => void
}

const Board = ({ board, clickHandler }: IBoard) => {
  return (
    <div className="board">
      {board.map((icon, idx) => {
        return <Box icon={icon} clickHandler={() => clickHandler(idx)} />
      })}
    </div>
  )
}

export default Board
