//COMPONENT LIFE-CYCLE IN REACT:

// import React from 'react';
// import { useState } from 'react'
// import Header from './Header.jsx'

// const App = () => {
//   let[state,setstate]=useState(0)
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>Welcome to ReactJS</h2>
//       {state <5 && <Header data={{state,setstate}}/>}
//     </div>
//   )
// }

// export default App

//----------------------------------------------------------

//!USE EFFECT-HOOK

// import React, { useEffect, useState } from "react";

// const App = () => {
//   let [count, setcount] = useState(0);

//   useEffect(() => {
//     console.log("hello harish")}, [count]
//   );

//   return (
//     <div>
//       <h1>Hello im app</h1>
//       <h2>Count:{count}</h2>
//       <button onClick={() => setcount(count + 1)}>Increment</button>
//     </div>
//   );
// };
// export default App;

//----------------------------------------------------------
//!Achive component life-cycle methods using useEffect-hook

// import React from 'react'
// import { useState } from 'react'
// import Header from './Header.jsx'
// const App = () => {
//   let [state, setstate] = useState(0)
//   return (
//     <div>
//       <h1>Helo in useEffect</h1>

//      {state < 5 && <Header  data={{state,setstate}}/>}

//     </div>
//   )
// }

// export default App

//----------------------------------------------------------
// increse the displya size  and decrease the browser  dispaly  width size using useeffect-hook

// import React, {  useState } from 'react'
// import { useEffect } from 'react'
// const App = () => {
//   let[width,setwidth]=useState(window.innerWidth)

//  useEffect(()=>{ window.addEventListener('resize',()=>{setwidth(window.innerWidth)})

//  },[width])

//   return (

//     <div>
//       <h1>App</h1>
//       <h1>{width}</h1>
//     </div>
//   )
// }
// export default App;

//----------------------------------------------------------

// import React, {  useState } from 'react'
// import { useEffect } from 'react'
// const App = () => {
//   let[hight,sethight]=useState(window.innerHeight)

//   useEffect(()=>{ window.addEventListener('resize',()=>{sethight(window.innerHeight)})
//   },[hight])

//   return (
//     <div>
//       <h1>App</h1>
//       <h1>{hight}</h1>
//     </div>
//   )
// }
// export default App;

//----------------------------------------------------------

//now we use both height and width in single app.jsx file

// import React, {  use, useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
//   let[width,setwidth]=useState(window.innerWidth)
//   let[hight,sethight]=useState(window.innerHeight)

//   useEffect(()=>{ window.addEventListener('resize',()=>{setwidth(window.innerWidth),sethight(window.innerHeight)})
//   },[width,hight])

//   // useEffect(()=>{ window.addEventListener('resize',()=>{sethight(window.innerHeight)})
//   // },[hight])

//   return (
//     <div>
//       <h1>WIDTH:{width}</h1>
//       <h1>HIGHT:{hight}</h1>
//     </div>
//   )
// }

// export default App

//----------------------------------------------
//fecthcing api data  from dummy json ,using useEffect-hook

// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// const App = () => {

//   let[data,setdata]=useState([])

//   useEffect(()=>{
//     fetch('https://api.github.com/users')
//     .then((x)=>x.json())                        // convert the data into json format
//     .then((y)=>setdata((y)))                    //set the data to state
//     .catch(()=>{console.log("error:")})         //catch the error if any

//   })

//   return (
//     <div>
//       <h1>App</h1>
//       <h1>users data</h1>

//       {
//         data.map((x)=>{
//           return(
//             <div  style={{border:'2px solid black',margin:'10px',padding:'10px'}}>
//               <h2>ID:{x.id}</h2>
//               <h2>User name : {x.login}</h2>
//               <img src={x.avatar_url} alt="user img" style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
//               <h2>Type:{x.type}</h2>
//               <a href={x.html_url} target="_blank" rel="noreferrer">Profile Link</a>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App

//-      ---------------------------------------------------------
//!FETCHING DATA USING ASCY AND AWAIT

// import React, { useEffect, useState } from "react";

// const App = () => {
//   let [data, setdata] = useState([]);

//   useEffect(() => {
//     let fetchdata = async () => {
//       let data = await window.fetch("https://api.github.com/users");
//       let finaldata = await data.json();
//       setdata(finaldata);
//     };
//     fetchdata();
//   }, []);

//   return (
//     <div>
//       <h1>hello</h1>
//       {data.map((x) => {
//         return (
//           <>
//             <img
//               src={x.avatar_url}
//               alt="user img"
//               style={{ width: "100px", height: "100px", borderRadius: "50%" }}
//             />
//             <h2>ID:{x.id}</h2>
//             <h2>User name : {x.login}</h2>
//             <h2>Type:{x.type}</h2>
//             <a href={x.html_url} target="_blank" rel="noreferrer">
//               Profile Link
//             </a>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default App;
//======================================================================================================================

// !react toasting:                                  ---npm i react-toastify

// import {ToastContainer,toast} from 'react-toastify'
// import "react-toastify/dist/ReactToastify.css"

// const App = () => {
//   let handlemsg=()=>{
//     toast("it")
//     toast.success("is")
//     toast.error("warning ")
//     toast.warn("message")

//   }

//   return (
//     <div>
//       <h1>App</h1>
//       <ToastContainer
//       position='top-right'
//       autoClose={4500}
//       hideProgressBar={false}
//       closeButton={true}
//       newestOnTop={true}
//       pauseonhover={true}
//       draggable />
//       <button on onClick={handlemsg}> click to see changes</button>

//     </div>
//   )
// }

// export default App

//======================================================================================================

//? use context hook

// import React, { createContext } from 'react'
// import B from './B'
// export let userdata=createContext()

// const App = () => {

//   return (
//     <div>
//       <h1>App component</h1>
//       <userdata.Provider value="i'm Harihskumar">
//          <B/>
//       </userdata.Provider>

//     </div>
//   )
// }

// export default App

//==============================================================================================================================================================================

//?react routing

import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import PagenotFound from "./PagenotFound";

const App = () => {

  function Error() {
    return (
      <>
        <h1>OOPS .....</h1>
        <h1>404</h1>
      </>
    );
  }
  return (
    <>
   
      <h1>App</h1>
      <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Navigate to="/login" replace/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/PagenotFound" element={<PagenotFound />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

//====================================================================================

//?Conditional Rendering

// import React from 'react'
// import Render from './Render';
// import Compo from './Compo';
// const App = () => {
//   let admin=true;
//   return (
//     <div>
//       <h1>Im app</h1>
//       <Render/>
//       {
//              admin && <Compo/>
//              //or
//             //  admin?<Compo/>:null
//       }

//     </div>
//   )
// }

// export default App;

//![[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//?HIGHER OREDER COMPONENTS IN REACT

//   import React, { useState } from 'react'

//   const App = () => {
//     return (
//       <div>
//         <h1>Hello</h1>
//         <Red  combo={counter}/>
//         <Green combo={counter}/>
//         <Blue combo={counter}/>
//       </div>
//     )
//   }

//   function Red(props){

//     return(
//       <div style={{backgroundColor:"red"}}>
//       <props.combo/>
//       </div>
//     )

//   }
//   function Green(b){

//     return(
//       <div style={{backgroundColor:"yellow"}}>
//       <b.combo/>
//       </div>
//     )

//   }
//   function Blue(c){

//     return(
//       <div style={{backgroundColor:"blue"}}>
// <c.combo/>
//       </div>
//     )

//   }

//   function counter(){

//     let[state,setstate]=useState(0);
//     return(
//       <>
//       <h1>{state}</h1>
//       <button onClick={()=>{setstate(state+10)}}>Click</button>
//       </>
//     )
//   }
//   export default App
//===================================================================================================

//bootstrap installtion
// import React from 'react'
// import './App.css'
// import("../node_modules/bootstrap/dist/css/bootstrap.min.css")
// const App = () => {
//   return (
//     <div>
//       <h1 className="text-warning bg-dark">hello</h1>
//       <h1 className="shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-danger">hello</h1>
//     </div>
//   )
// }

// export default App

// ===============================================================================================================

//!                                         DO-TO-LIST

// import React, { useState } from "react";
// import "./App.css";
// import { Alert } from "bootstrap";
// const App = () => {
//   let [todoinput,updateinput]=useState();
//   let [nextId, setNextId] = useState(4);
//   let [todolist, updatetodo] = useState([
//     {
//       id: 1,
//       task: "learn html",
//     },
//     {
//       id: 2,
//       task: "learn html",
//     },
//     {
//       id: 3,
//       task: "learn html",
//     }
//   ]);
// function Addnewtodo(){
//   if(todoinput==" "){
//       alert("Give a  correct value")
//   }
//   else{
//     let newtodos=[
//        ...todolist,{
//         id:nextId,task:todoinput
//        }
//     ]
//     updatetodo(newtodos)
//     setNextId(nextId + 1);

//   }
//    updateinput(" ");
// }
// function deletetodo(id){
//   let ontodo = todolist.filter((todo)=>todo.id!==id);
//   updatetodo(ontodo);
// }
// return (
//     <div className="container mt-5 w-25">
//       <div className="input-group">

//         <input type="text"onChange={(e)=>{let task =e.target.value; updateinput(task)}} className="form-control bg-black  text-primary" />
//         <button className="btn btn-primary " onClick={Addnewtodo}>Click</button>
//       </div>

//       <ul className="list-group mt-5">
//         {todolist.map((todo) => {
//           return (
//             <>
//               <li className="list-group-item">
//                 <p className="mb-0">{todo.task}</p>
//                 <button className="btn" onClick={()=>deletetodo(todo.id)} >❌</button>
//               </li>
//             </>
//           );
//         })}

//       </ul>
//     </div>
//   );
// };

// export default App;

//=======================================================================================

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {
//   let[data,setdate]=useState(null);
//   let[loading,setloading]=useState(true);
//   let[error,seterror]=useState();

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(response=>{
//       setdate(response.data)
//       setloading(false)
//     })
//     .catch(error=>{
//       seterror("error to fetching data")
//       setloading(false)
//     })
//   },[])

//   if(loading)return<div>loading......</div>
//   if(error)return<div>{error}......</div>
//   return (
//     <div>
//       <h1>App</h1>
//       <h1>Fetched data...</h1>
//       <ul>
//         {
//           data.map(post=>(
//             <li>{post.id} and {post.title}</li>
//           ))
//         }
//       </ul>

//     </div>
//   )
// }

// export default App

//======================================================================================

// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   let [title, settitle] = useState();
//   let [body, setbody] = useState();

//   let handle = (e) => {
//     e.preventDefault();

//     let postdata = { title, body };
//     axios
//       .post("https://jsonplaceholder.typicode.com/posts", postdata)
//       .then((response) => {
//         console.log("Data Posted:", response.data);
//       })
//       .catch((error) => {
//         console.log("Error posting data", error);
//       });
//   };

//   return (
//     <div>
//       <h1>app </h1>
//       <form action="">
//         <label htmlFor="">Enter Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => {
//             settitle(e.target.value);
//           }}
//         />
//         <br />
//         <br />
//         <br />
//         <label htmlFor="">Eneter body</label>
//         <textarea
//           name=""
//           id=""
//           value={body}
//           onChange={(e) => {
//             setbody(e.target.value);
//           }}
//         ></textarea>
//         <button onClick={handle}>click</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//================================================================================================================================
// EX2
/**
 * Returns a React portal containing a child component
 * rendered directly into the document's body.
 */
// import React from "react";
// import ReactDOM from "react-dom";

// function Child() {
//   return (
//     ReactDOM.createPortal(
//     <>
//       <h1>im child</h1>,
//       <h1>im child componet</h1>,
//     </>,
//     document.body
//   )
// );
// }

// const App = () => {
//   return (
//     <div>
//       <h1>I am App</h1>
//       <h1>I am App component</h1>
//       <Child />
//     </div>
//   );
// };

// export default App;
//=============================================================================================

// ex 3
// import ReactDOM from "react-dom";
// function Child(props){
//   return(
//     ReactDOM.createPortal(
//       <>
//       <h1>Child</h1>
//       <h2> HI {props.data}</h2>
//       </>,document.getElementById("portal")
//     )
//   )
// }


// const App = () => {
//   return (
//     <div>
//       <h1>Hi i'm app</h1>
//       <Child data=" devil"/>
//     </div>
//   )
// }

// export default App

//=============================================================================================
import "./App.css"
// import { useState } from "react"
// import ReactDOM from "react-dom"
//   function  Modal(props){
//   return(
//     ReactDOM.createPortal(
//     <div className="modal-body">
//     <div className="modal-content">
//       <h1>Modal</h1>
//       <h1>Im in modal world</h1>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, facilis?</p>
//       <button onClick={props.close} className="btn btn-primary">close</button>
//       </div>
//     </div>,
//     document.getElementById("portal")
//   )
// ) 
// }

// function App(){
//   let[Showmodal,setshowmodal]=useState(false)
//   function toggle(){
//     setshowmodal(!Showmodal)
//   }
//   return(
//     <div className="container">
//       <h1>App</h1>
//       <button onClick={toggle} className="btn btn-danger">open</button>
//       {Showmodal && <Modal close={toggle} ></Modal>}
//     </div>
//   )
// }
// export default App;



//====================================================================================
//!useReducer in react
// import React from 'react'
// import { useReducer } from 'react'

// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 10 };
//     case 'DECREMENT':
//       return { count: state.count - 10 };
//     default:
//       return state;

// };

// }
// const App = () => {
//   let initialState = {count:0};
//   let[state,dispatch]=useReducer(counterReducer,initialState)
//   return (
//     <div>
//       <h1>App</h1>
//       <h2>count: {state.count}</h2>
//       <button className="btn btn-success" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
//       <button className="btn btn-danger" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      
//     </div>
//   )
// }

// export default App



//===================================================================================
// import React from 'react'
// import { useReducer } from 'react'

// const counterReducer = (state, action) => {
//   switch (                action.type) {
//     case 'inc':return   state + 10 
//     case 'dec':return   state - 10 
//     case 'res':return  0 ;
//     default:return state;

// };

// }
// const App = () => {
 
//   let[state,dispatch]=useReducer(counterReducer,0)
//   return (
//     <div>
//       <h1>App</h1>
//       <h2>count: {state}</h2>
//       <button className="btn btn-success" onClick={()=>dispatch({type:"inc"})}>Increment</button>
//       <button className="btn btn-primary" onClick={()=>dispatch({type:"res"})}>Reset</button>
//       <button className="btn btn-danger" onClick={()=>dispatch({type:"dec"})}>Decrement</button>
      
//     </div>
//   )
// }

// export default App

