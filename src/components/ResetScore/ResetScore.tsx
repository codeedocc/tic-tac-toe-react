import React from 'react'
import './ResetScore.css'

interface INewGame {
  resetScore: () => void
}

const NewGame: React.FC<INewGame> = ({ resetScore }) => {
  return (
    <button className="newGame-btn" onClick={() => resetScore()}>
      Сбросить счёт
    </button>
  )
}

export default NewGame
