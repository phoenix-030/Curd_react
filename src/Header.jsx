// import { Component } from 'react'

//  class Header extends Component {

//     constructor(){
//         super();
//         console.log("i am constructor method...")//ONLY ONCE

//     }
//     componentDidMount(){


//         console.log("i am componentDidMount method...")//ONLY ONCE
//     }

//     componentDidUpdate(){

//               console.log("i am componentDidUpdate method...")//CHANCING IN DTATE OR PROPS
//     }

//     componentWillUnmount(){

//         console.log("i am componentWillUnmount method...")//REMOVE FROM DOM
//     }
//   render() {
//     console.log("i'm render")
//     return (
//       <>

//         <h1> im header  </h1>
//         <h1> {this.props.data.state} </h1>
//         <button onClick={()=>{this.props.data.setstate(this.props.data.state+1)}}>click</button>
//       </>
//     )
//   }
// }
// export default Header;




//----------------------------------------------------------
//Achive component life-cycle methods using useEffect-hook

import React, { useEffect } from 'react'

const Header = (x) => {
  useEffect(() => {
    console.log("i'm render")
  }, [])
  useEffect(() => {
    console.log("i'm component dimount")
  }, [])
  useEffect(() => {
    console.log("i'm component didupdate")
  }, [x.data.state])
  useEffect(() => {
    console.log("i'm  component didwillunmount")
  }, [])
  return (
    <div>
      <h1>im header</h1>
      <h1>{x.data.state}</h1>

      <button onClick={()=>{x.data.setstate(x.data.state+1)}}>Increment</button>
    </div>
  )
}

export default Header

