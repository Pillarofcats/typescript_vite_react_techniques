import React, {useState, useEffect} from 'react'

function Timer ({timerID, setNewTimerID}:any) {
  const [count, setCount] = useState<number>(0)

  const [tooltipIsActive, setTooltipIsActive] = useState<boolean>(false)

  useEffect(() => {
    console.log('starting timer component')
    
    const time = setInterval(() => {
      return setCount(currCount => currCount + 1)
    }, 1000)

    return () => {
      console.log('clearing timer component')
      clearInterval(time)
    }
  }, [])

  console.log('Render Timer')
  return (
    <>
      <h2>Timer</h2>
      <span onMouseOver = {() => setTooltipIsActive(true)} onMouseOut = {() => setTooltipIsActive(false)}>Hover mouse for Timer tooltip! {tooltipIsActive ? `TimerID: ${timerID} Count: ${count}` : ''}</span>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={setNewTimerID}>New Timer Component</button>
    </>
  )
}

export default React.memo(Timer)