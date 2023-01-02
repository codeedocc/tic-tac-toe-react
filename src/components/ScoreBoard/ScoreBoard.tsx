import React from 'react'
import './ScoreBoard.css'

interface IScoreBoard {
  scores: {
    xScore: number
    oScore: number
  }
  xPlaying: boolean
}

const ScoreBoard: React.FC<IScoreBoard> = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores

  return (
    <div className="scoreBoard">
      <span className={`score x-score ${!xPlaying && 'inactive'}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && 'inactive'}`}>
        O - {oScore}
      </span>
    </div>
  )
}

export default ScoreBoard
