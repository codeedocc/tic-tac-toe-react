import React from 'react'
import Box from './Box'

interface IBoard {
  board: string[]
  clickHandler: (idx: number) => void
}

const Board = ({ board, clickHandler }: IBoard) => {
  return (
    <div>
      {board.map((icon, idx) => {
        return <Box icon={icon} clickHandler={() => clickHandler(idx)} />
      })}
    </div>
  )
}

export default Board
