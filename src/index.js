import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Users from './components/Users'
/*const Hello = (props) => {
  //const now = new Date()
  //const a = 10
  //const b = 20
return (
  <div>
    <p>Hello {props.name},you are {props.age} years old</p>
  </div>
)
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>

  )
}*/
const App = () => {
  const course ='Mange'
  // const part1= 'Fundamentals of React'
  // const exercises1 = 10
  // const part2='Using pros to pass data'
  // const exercises2=7
  // const part3='State of a component'
  // const exercises3= 14
  const users = ["Jahid MAnge", "Kanke", "Mage"]
  const listItems = users.map((user) =>
  <li><Users user={user}/></li>
);
  return (
    /*<div>
      <h1>{course}</h1>
  <p>{part1} {exercises1}</p>
  <p>{part2} {exercises2}</p>
  <p>{part3} {exercises3}</p>
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      </div>
    
  )
}*/


<div>
  <Header course = {course}/>
  {listItems}
  {/* <Content Parts={part1,part2,part3}/>
  <Total Number of exercises ={exercises1+exercises2+exercises3} /> */}
</div>
  )
}




ReactDOM.render(< App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

