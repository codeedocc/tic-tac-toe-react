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
        return (
          <Box
            key={idx}
            icon={icon}
            idx={idx}
            clickHandler={() => clickHandler(idx)}
          />
        )
      })}
    </div>
  )
}

export default Board
