import React, { useContext } from 'react'
import { userdata } from './App'

const C = () => {
  
    let display=useContext(userdata) 

    return (
    <div>
        <h1>c component</h1>
        <h1>hello {display}</h1>
        </div>
  )
}

export default C;