import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState<number>(0)
  console.log("Counter Render")
  return (
    <>
      <h2>Counter Component</h2>
      <button className="Subtract" onClick={() => setCount(prev => prev - 1)}>-</button>
      <span>Count: {count}</span>
      <button className="Add" onClick={() => setCount(prev => prev + 1)}>+</button>
      
    </>
  )
}

export default React.memo(Counter)