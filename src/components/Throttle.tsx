import React, {useState, useEffect} from 'react'

import {useThrottle} from '../hooks/useThrottle'

function Throttle () {

  const [xy, setXY] = useState<number[]>([0,0])

  const throttled = useThrottle((e:MouseEvent) => {
    e.preventDefault()
    setXY([e.clientX, e.clientY])
  }, 500)

  useEffect(() => {

    window.addEventListener('mousemove', throttled)
    return () => {
      window.removeEventListener('mousemove', throttled)
    }
  },[])

  return (
    <>
      <h2>Throttle Mouse Movement</h2>
      <span>x: {xy[0]} y: {xy[1]}</span>
    </>
  )
}

export default React.memo(Throttle)