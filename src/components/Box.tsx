import React from 'react'
import './Box.css'

interface IBox {
  clickHandler: () => void
}

const Box = ({ clickHandler }: IBox) => {
  const value = 'X'

  const style = value === 'X' ? 'box x' : 'box o'
  return (
    <button className={style} onClick={clickHandler}>
      {value}
    </button>
  )
}

export default Box
