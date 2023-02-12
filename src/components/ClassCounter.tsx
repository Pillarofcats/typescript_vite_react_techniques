import React, {Component} from 'react'

type tState = {
  count: number
}

class ClassCounter extends Component<{}, tState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render() {
    console.log("Class Counter Render")
    return (
    <>
      <h2>Class Counter Component</h2>
      <button className='classSubtract' onClick={() => this.setState(prevState => ({count: prevState.count - 1}))}>-</button>
      <span>Class Counter: {this.state.count}</span>
      <button className='classAdd' onClick={() => this.setState(prevState => ({count: prevState.count + 1}))}>+</button>
    </>
    )
  }
}

export default React.memo(ClassCounter)