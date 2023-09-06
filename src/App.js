import React, { useState} from 'react'
import FormInput from './components/FormInput'

import "./App.css"

const App = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"Please enter a valid mail address",
      label: "Email",
      required:true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required:true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Your Password must contain at least one uppercase letter, lowercase, 1 number and one special charter",
      label: "Password",
      pattern:"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$",
      required:true
    },
    {
      id: 5,
      errorMessage:"",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      pattern:values.password,
      required:true
    },
  ]

  const changeHandler = (event)=>{
    setValues(event.target.value)
  }

  const submitHandler = (event) =>{
    event.preventDefault();

  }
  const inputsRender = inputs.map((input) => {
    return (
      <FormInput
        key={input.id}
        {...input} 
        onChange={changeHandler}
        value={values[input.value]}/>
    )
  })

  return (
    <div className='app'>
      <form className='form' onSubmit={submitHandler}>
        {inputsRender}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App