import {useState, useCallback} from 'react'

import './App.css'

import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import Form from './components/Form'
import ClassForm from './components/ClassForm'
import Fetch from './components/Fetch'

import Timer from './components/Timer'

import EventTooltip from './components/EventTooltip'

import LocalStorage from './components/LocalStorage'

import ContextUseState from './components/ContextUseState'

import ContextUseReducer from './components/ContextUseReducer'

import SearchComplete from './components/SearchComplete'

import Throttle from './components/Throttle'

function App() {
  //Form & List
    //Prevent rerenders to components that receive items as props
    // const items = useMemo(() => ['Apple', 'Ham', 'Hamburger', 'AppleSauce'], [])
  const [items, setItems] = useState<string[]>(['Apple', 'Ham', 'Hamburger', 'AppleSauce'])

  //Timer
  const [timerID, setTimerID] = useState<number>(0)
  const setNewTimer = useCallback(() => {
    console.log('Creating new timer component')
    return setTimerID(timerID + 1)
  }, [timerID])

  //App
  const [rerender, setRerender] = useState<number>(0)
  const newRender = () => {
    setRerender(prevState => prevState + 1)
  }

  console.log("App Render")
  return (
    <div className="App">
      <button onClick={newRender}>Rerender App: {rerender}</button>
      <Counter />
      <ClassCounter />
      <Form items={items} />
      <ClassForm items={items}/>
      <Fetch />

      {/* The key in Timer will cause a new Timer component to be created and rendered */}
      <Timer key={timerID} timerID={timerID} setNewTimerID={setNewTimer} />
      
      <EventTooltip />

      <LocalStorage />

      <ContextUseState />

      <ContextUseReducer />

      <SearchComplete />

      <Throttle/>
      
    </div>
  )
}

export default App
