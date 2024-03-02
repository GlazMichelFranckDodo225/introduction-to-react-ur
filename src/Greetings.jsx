import React from 'react'

const Greetings = (props) => {
  console.log("Mes Props", props);

  return (
    <>
      <p>{props.doSomething()}</p>
      <p>{props.children}</p>
      <ul>
        <li>My First Name is {props.firstName}.</li>
        <li>I'm {props.age} Years Old.</li>
        <li>
          Car :
          <ul>
            <li>Color : {props.car.color}</li>
            <li>Speed : {props.car.speed}</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default Greetings