import React, {useState, useCallback} from 'react'
import {useFetch} from './useFetch'

// import blah from '../json/foods.json'

function Fetch () {
  const [url, setUrl] = useState<string>("")

  const catURL = useCallback(() => setUrl('/json/cat.json'), [])
  const dogURL = useCallback(() => setUrl('/json/dog.json'), [])

  const {data} = useFetch(url) || {}

  const animalType = data ? Object.keys(data) : 'Null'

  console.log('Render Fetch')
  return (
    <>
      <h2>Fetch</h2>
      <span>Animal Type: {animalType}</span>
      <ul style={{listStyleType: 'none'}}>
        {
          data ? data[`${Object.keys(data)}`].map((animal:any, index:any) => {
            return (
              <li style={{textAlign: 'center'}} key={index}>
                {JSON.stringify(animal)}
              </li>
            )
          }) : <li>"No data"</li>
        }
      </ul>
      <button onClick={catURL}>cat data</button>
      <button onClick={dogURL}>dog data</button>
    </>
  )
}

export default React.memo(Fetch)