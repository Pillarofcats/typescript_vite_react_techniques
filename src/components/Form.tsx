import React, {useState, useCallback, useMemo} from 'react'
import List from './List'

type tProps = {
  items: string[]
}

function Form ({items}:tProps) {

  const [searchList, setSearchList] = useState<string[]>(items)
  const [search, setSearch] = useState<string>("")

  const filtered = useMemo(() => {
    return items.filter((item) => item.toLowerCase().includes(search))
  }, [search])

  const submitIt = useCallback((e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(search) setSearchList(filtered)
    else setSearchList(items)

  }, [search]) 

  console.log("Form Render")
  return (
    <>
      <h2>Search Form</h2>
      <form onSubmit={submitIt}>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" placeholder="input.." onChange={(e) => {
          const lowercase = e.target.value
          setSearch(lowercase.toLowerCase())
          }} />
        <button type="submit">Submit</button>
      </form>
      <List list={searchList}/>
    </>
  )
}

export default React.memo(Form)