import React, {useState,  useCallback, useEffect} from 'react'

const mockFETCHFoodList = (query: string, signal?:AbortSignal):Promise<string[]> => {

  const foodList = [
    "blueberries",
    "strawberries",
    "hamburger",
    "lettuce",
    "tomato",
    "corn",
    "lasagna",
    "french fries",
    "mashed potatoes",
    "potato soup",
    "beef stew",
    "eggs",
    "bread",
    "pasta",
    "onion",
    "garlic",
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Abort
      if(signal?.aborted) {
        reject(signal.reason)
      }

      resolve(
        foodList.filter((food:string) => {
          return food.toLowerCase().includes(query.toLowerCase())
        })
      )
    }, 500)
  })
}

import {useSearchDebounce} from "../hooks/useSearchDebounce"

function SearchComplete () {
  //Queried food from list
  const [query, setQuery] = useState("")
  //Filtered food list
  const [searchComplete, setSearchComplete] = useState<string[]>([])
  //Debounce
  const debounceQuery = useSearchDebounce(query)

const controller = new AbortController()

  useEffect(() => {
    console.log("Search Complete Active");

    const signal = controller.signal;

    (async () => {

      // setSearchComplete([])

      if(debounceQuery.length > 0) {
        console.log(query)
        const foodList = await mockFETCHFoodList(debounceQuery, signal)
        console.log('foodlist', foodList)
        setSearchComplete(foodList)
      }
    })()

    return () => {
      console.log('Reset Search Complete')
      setSearchComplete([])

      controller.abort("abort request")
    }
  }, [debounceQuery])

  console.log("Render Search Complete")
  return (
    <>
      <h2>Debounce Search Complete</h2>
      <label htmlFor="search">Food Search:</label>
      <br/>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        id="search"
        name="search"
        type="text"
        placeholder="search.." />
        {
          searchComplete.map((search:string, index: number) => <div key={index}>{search}</div>)
        }
    </>
  )
}

export default React.memo(SearchComplete)