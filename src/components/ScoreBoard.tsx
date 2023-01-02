import React from 'react'
import './ScoreBoard.css'

interface IScoreBoard {
  scores: {
    xScore: number
    oScore: number
  }
  xPlaying: boolean
}

const ScoreBoard = ({ scores, xPlaying }: IScoreBoard) => {
  const { xScore, oScore } = scores

  return (
    <div className="scoreBoard">
      <span>X - {xScore}</span>
      <span>O - {oScore}</span>
    </div>
  )
}

export default ScoreBoard
