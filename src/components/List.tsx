import React from 'react'

type tList = {
  list: string[]
}

function List({list}:tList) {
  console.log("List Render")

  return (
    <ul style={{listStyleType: 'none'}}>
      {
        list.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  )
}

export default React.memo(List)