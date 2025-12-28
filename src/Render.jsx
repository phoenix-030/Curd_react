import React from 'react'

const Render = () => {
    let logedin=false;
  return (
    <div>
      <h1>I'm Render</h1>
      <ol>
        <li>Home</li>
        <li>About</li>
        <li>Cantoacts</li>
        {/* <li>LOgin</li> */}
       {
        logedin?(<li>login</li>):(<li>Logout</li>)
       }
      </ol>
    </div>
  )
}

export default Render
