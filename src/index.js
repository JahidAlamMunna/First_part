import React from 'react'
import ReactDOM from 'react-dom'

  //const now = new Date()
  //const a = 10
  //const b = 20
/*return (
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
}
const Header = ({course}) =>{
  
return (
<h1>{course}</h1>
);
};
const Part = ({part}) => {
  return (
      <p>
          {part.name} {part.exercises}
      </p>
  );
};
const Content=({parts})=> {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />

    </div>
  );
};
const Total = ({parts}) => {
  return (
<p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  
);
  };

const App = () => {
  const course = {
    name:'Half Stack application development',
   parts :[
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using pros to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    //const users = ["Jahid MAnge", "Kanke", "Mage"]
    //const listItems = users.map((user) =>
    //<li><Users user={user}/></li>
  ]
  
};
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    
    </div>

  );
};
const header = (props) =>{
  console.log(props)
return <h1>{props.course}</h1>
}
const Content(props) {
  console.log(props)
  return <h1>{props.parts}</h1>
}*/
  

/*<div>
  <Header course = {course}/>
  {listItems}
  { <Content Parts={part1,part2,part3}/>
  <Total Number of exercises ={exercises1+exercises2+exercises3} /> }
</div>
  )
  
const Hello = ({name, age}) =>{

const bornYear = () => 
  new Date().getFullYear() -age
//return yearNow-props.age

return (
//<div><p>Hello {props.name},you are {props.age}years old</p></div>
<div>
  <p>
    Hello {name},you are {age}years old
  </p>
  <p>So probably you are born in{bornYear()}</p>
</div>
)
}
*/
const App = (props) =>{
  const{counter}=props

  //const name = "Jahid"
 // const age = 24
return(
  <div>
    {counter}
  </div>
  /*<div>
    <h1>GREETINGS</h1>
    <Hello name="choco" age={26+16}/>
    <Hello name={name} age={age}/>

  </div>*/

)
}

let counter = 1
const refresh = () => {
ReactDOM.render(<App counter={counter}/>, document.getElementById('root'))
}
/*
refresh()
counter +=1
refresh()
counter +=1
refresh()
*/

setInterval(() => {
  refresh()
  counter += 1
}, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

