import React from 'react'
import './Restart.css'

interface IResetButton {
  resetBoard: () => void
}

const ResetButton: React.FC<IResetButton> = ({ resetBoard }) => {
  return (
    <button className="reset-btn" onClick={resetBoard}>
      Начать заново
    </button>
  )
}

export default ResetButton
