import {useEffect, useState} from "react"

export const useSearchDebounce = (query:string, time:number=600) => {
  const [debounceQuery, setDebounceQuery] = useState(query)

  useEffect(() => {
  const timeout = setInterval(() => {
    setDebounceQuery(query)
  }, time)

  return () => {
    clearInterval(timeout)
  }
}, [query, time])

  return debounceQuery
}