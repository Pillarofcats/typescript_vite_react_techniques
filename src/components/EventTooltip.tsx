import React, {useState, useEffect, useRef, useCallback, useMemo} from 'react'

function EventTooltip () {

  const messages = ["Have a great day!", "Love you!", "You're the best!", "Take care!", "You're number one!", "Do your best!"]
  //Random index 0 -> 2 (Max is not inclusive in messages.length = 3)
  const rollRandMessage =   messages[Math.floor(Math.random() * messages.length)]

  const [randomMessage, setRandomMessage] = useState<string>(rollRandMessage)
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false)

  const eventRef = useRef<HTMLSpanElement>(null)

  const onMouseOver = useCallback(() => setIsTooltipVisible(true), [])
  const onMouseOut = useCallback(() => setIsTooltipVisible(false), [])

  const handleSetRandomMessage = () => setRandomMessage(rollRandMessage)

  useEffect(() => {
    handleSetRandomMessage()

    console.log('Adding tooltip event listeners')
    eventRef.current?.addEventListener('mouseover', onMouseOver)
    eventRef.current?.addEventListener('mouseout', onMouseOut)

    const cacheRef = eventRef?.current

    return () => {
      console.log('Removing tooltip event listeners')
      cacheRef?.removeEventListener('mouseover', onMouseOver)
      cacheRef?.removeEventListener('mouseout', onMouseOut)
    }
  }, [isTooltipVisible])

  console.log('Render Tooltip')
  return (
    <>
      <h2>Event Tooltip</h2>
      {isTooltipVisible ? <span>{randomMessage}</span> : ""}
      <br />
      <span ref={eventRef}>Hold mouse here for secret message!</span>
    </>
  )
}

export default React.memo(EventTooltip)