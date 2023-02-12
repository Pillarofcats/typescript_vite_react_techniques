import React, {useState, createContext, useContext, useCallback} from 'react'

type tStateContextValue = {
  state: number
  setState: React.Dispatch<React.SetStateAction<number>>
}

type tChildrenComp = {
  children?: React.ReactNode | any
}

const initState:tStateContextValue = {
    state: 0,
    setState: () => {} //noop (No Operation) default callback
    // increment: () => setState(s => s + 1)
}

const StateContext = createContext(initState)

const Count = ({children}:tChildrenComp) => {
  const {state} = useContext(StateContext)
  console.log('Render Context UseState: Count')
  return (
    <>
      <span>Count: {state}</span>
      {children}
    </>
  )
}

const IncrementCount = React.memo(() => {
  const {setState} = useContext(StateContext)
  
  const increment = useCallback(() => setState(s => s + 1), [])
  console.log('Render Context UseState: Add Button')
  return (
    <>
      <button onClick={increment}>increment</button>
    </>
  )
})

const DecrementCount = React.memo(() => {
  const {setState} = useContext(StateContext)

  const decrement = useCallback(() => setState(s => s - 1), [])
  console.log('Render Context UseState: Subtract Button')
  return (
    <>
      <button onClick={decrement}>decrement</button>
    </>
  )
})

const Container = () => {
  console.log('Render Context UseState: Container')
  return (
    <>
    <DecrementCount />
      <Count>
        <IncrementCount />
      </Count >
    </>
  )
}

const StateContextProvider = ({children}:tChildrenComp) => {
  const [state, setState] = useState(initState.state)

  // const memoState = useMemo(() => ({state, setState}), [])

  console.log('Render Context UseState: Context Provider')
  return (
    <StateContext.Provider value={{state, setState}}>
      {children}
    </StateContext.Provider>
  )
}

function ContextUseState () {
  console.log('Render Context UseState: App')
  return (
    <>
      <h2>Context UseState</h2>
      <StateContextProvider>
        <Container />
      </StateContextProvider>
    </>
  )
}

export default React.memo(ContextUseState)