//Custom fetch hook
import React, {useState, useEffect} from 'react'

type tAnimal = {
    name: string,
    age: number,
    color: string
}

export const useFetch = (pURL:string) => {
  const [data, setData] = useState<tAnimal | any>(null)

  useEffect(() => {
    console.log('Fetch useEffect starting')

    let isMounted = true
    const controller = new AbortController();
    const signal = controller.signal;

    if(isMounted && pURL) {
      fetch(pURL, {signal: signal})
        .then(res => res.json())
        .then(resData => setData(resData))
    }

    return () => {
      isMounted = false
      controller.abort();
    }
  }, [pURL])

  return {data}
}