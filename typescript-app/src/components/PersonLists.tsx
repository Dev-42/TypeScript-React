import React from 'react'

type PersonList ={
    names : {
        frist:string,
        last:string
    }[]
}

const PersonLists = (props : PersonList) => {
  return (
    <div>
      {props.names.map((person) => (
        <div>
            <h2>{person.frist}</h2>
            <h2>{person.last}</h2>
        </div>
      ))}
    </div>
  )
}

export default PersonLists
