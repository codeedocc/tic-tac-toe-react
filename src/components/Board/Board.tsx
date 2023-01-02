import React from 'react'
import Box from '../Box/Box'
import './Board.css'

interface IBoard {
  board: string[]
  clickHandler: (idx: number) => void
}

const Board: React.FC<IBoard> = ({ board, clickHandler }) => {
  return (
    <div className="board">
      {board.map((icon, idx) => {
        return (
          <Box
            key={idx}
            icon={icon}
            idx={idx}
            clickHandler={() => icon === null && clickHandler(idx)}
          />
        )
      })}
    </div>
  )
}

export default Board
