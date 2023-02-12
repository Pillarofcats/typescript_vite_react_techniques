import React, { createContext, useContext, useCallback, useReducer} from 'react'

enum eActionTypes { 
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

type tAction = {
  type: eActionTypes
  payload: number
}

type tChildrenComp = {
  children?: React.ReactNode | any
}

type tStateCount = {
  count: number
}

type tStateContextValue = {
  state: tStateCount
  dispatch: React.Dispatch<tAction>
}

const initState:tStateContextValue = {
    state: {
      count: 0
    },
    dispatch: () => {}
}

const StateContext = createContext(initState)

const contextStateReducer = (state:tStateCount , action:tAction): tStateCount => {
  switch(action.type) {

    case eActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case eActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }
}

const Count = ({children}:tChildrenComp) => {
  const {state, dispatch} = useContext(StateContext)
  console.log('Render Context UseState: Count')
  return (
    <>
      <span>Count: {state.count}</span>
      {children}
    </>
  )
}

const IncrementCount = React.memo(() => {
  const {state, dispatch} = useContext(StateContext)

  const increment = useCallback(() => dispatch({type: eActionTypes.INCREMENT, payload: 1}), [])
  console.log('Render Context UseState: Add Button')
  return (
    <>
      <button onClick={increment}>increment</button>
    </>
  )
})

const DecrementCount = React.memo(() => {
  const {dispatch} = useContext(StateContext)

  const decrement = useCallback(() => dispatch({type: eActionTypes.DECREMENT, payload: 1}), [])
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
  const [state, dispatch] = useReducer(contextStateReducer, initState.state)

  console.log('Render Context UseState: Context Provider')
  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )
}

function ContextUseReducer () {
  console.log('Render Context UseState: App')
  return (
    <>
      <h2>Context UseReducer</h2>
      <StateContextProvider>
        <Container />
      </StateContextProvider>
    </>
  )
}

export default React.memo(ContextUseReducer)