import { useState, useEffect } from 'react'

const useTypeWriter = (text, startNow = true, speed = 100, skip) => {
  const [toBeTyped] = useState(text)
  const [displayedText, setDisplayedText] = useState('')
  const [isDone, setIsDone] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  useEffect(
    () => {
      if (skip) return
      if (displayedText.length === toBeTyped.length) {
        clearInterval(intervalId)
        setIsDone(true)
      } else {
        const interval = setInterval(() => {
          if (displayedText.length < toBeTyped.length && startNow) {
            setDisplayedText(toBeTyped.substring(0, displayedText.length + 1))
          }
        }, speed)
        setIntervalId(interval)
      }
      return () => clearInterval(intervalId)
    },
    [displayedText, startNow]
  )

  return [displayedText, isDone || false]
}

export default useTypeWriter