import React from 'react'
import './Box.css'

interface IBox {
  icon: string
  clickHandler: (idx: number) => void
  idx: number
}

const Box: React.FC<IBox> = ({ icon, clickHandler, idx }) => {
  const style = icon === 'X' ? 'box x' : 'box o'
  return (
    <button className={style} onClick={() => clickHandler(idx)}>
      {icon}
    </button>
  )
}

export default Box
