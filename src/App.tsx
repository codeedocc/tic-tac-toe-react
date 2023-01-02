import React from 'react'
import './App.css'
import Box from './components/Box'

function App() {
  function clickHandler() {}

  return (
    <div className="App">
      <Box clickHandler={() => clickHandler()} />
    </div>
  )
}

export default App
