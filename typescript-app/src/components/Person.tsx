import React from 'react'

type PersonProps = {
    name : {
        frist : string,
        last: string
    }
}

const Person = (props : PersonProps) => {
  return (
    <div className="">
      <h1>{props.name.frist} {props.name.last}</h1>
    </div>
  )
}

export default Person
