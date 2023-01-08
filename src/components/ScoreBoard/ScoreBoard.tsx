import React from 'react'
import './ScoreBoard.css'

interface IScoreBoard {
  scores: {
    xScore: number
    oScore: number
  }
  xPlaying: boolean
  x: number | string
  o: number | string
}

const ScoreBoard: React.FC<IScoreBoard> = ({ xPlaying, x, o }) => {
  return (
    <div className="scoreBoard">
      <span className={`score x-score ${!xPlaying && 'inactive'}`}>
        X - {x}
      </span>
      <span className={`score o-score ${xPlaying && 'inactive'}`}>O - {o}</span>
    </div>
  )
}

export default ScoreBoard
