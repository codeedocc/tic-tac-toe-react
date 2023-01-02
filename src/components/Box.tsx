import React from 'react'
import './Box.css'

interface IBox {
  icon: string
  clickHandler: (idx: number) => void
}

const Box = ({ icon, clickHandler }: IBox) => {
  const style = icon === 'X' ? 'box x' : 'box o'
  return (
    <button className={style} onClick={() => clickHandler(1)}>
      {icon}
    </button>
  )
}

export default Box
