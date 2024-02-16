
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip.js'

const App = () => {
  return (
    <div>
        
      <Tooltip tooltipText={'This is a tooltip'}>
        <h2>MAIN CONTENT 1</h2>
      </Tooltip>

      <Tooltip tooltipText={'This is another tooltip'}>
        <h3>MORE MAIN TEXT</h3>
      </Tooltip>
    </div>
  )
}

export default App
