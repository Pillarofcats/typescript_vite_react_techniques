import React, {PureComponent} from 'react'

import List from './List'

type tProps = {
  items: string[]
}

type tState = {
  searchList: string[],
  search: string
}

class ClassForm extends PureComponent <tProps, tState> {

  constructor(props: tProps) {
    super(props)

    this.state = {
      searchList: this.props.items,
      search: ""
    }
  }

  submitIt = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const filtered = this.props.items.filter((item) => item.toLowerCase().includes(this.state.search))

    if(this.state.search) {
      this.setState({searchList: filtered})
    }
    else this.setState({searchList: this.props.items})
  }

  render() {
    console.log("Class Form Render")
    return (
      <>
        <h2>Class Search Form</h2>
        <form onSubmit={(e) => this.submitIt(e)}>
        <label htmlFor="csearch" >Search</label>
        <input type="text" id="csearch" placeholder="input.." onChange={(e) => {
          const lowercase = e.target.value
          this.setState({search: lowercase})
        }} />
        <button type="submit">Submit</button>
        </form>

        <List list={this.state.searchList}/>
      </>
    )
  }
}

export default React.memo(ClassForm)