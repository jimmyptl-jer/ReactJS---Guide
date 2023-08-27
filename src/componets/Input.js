import {  useState } from 'react'
import Card from './Card';

import classes from "./Input.module.css"
import Button from './Button';
import ErrorModal from './UI/ErrorModal';
import Wrapper from './Helper/Wrapper';

const Input = (props) => {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const[error,setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length < 0) {
      setError({
        title: 'Invalid Username',
        mssage: 'Please enter a valid username'
      });
      return;
    }

    if (age ===0 || age < 1) {
      setError({
        title:'Invalid Age',
        message:'Please enter a valid age'
      });
      return;
    }

    props.onAddUser(username, age);
    

    setUsername('')
    setAge(0)
  }

  const onChangeNameHandler = (event) => {
    let value = event.target.value;
    console.log(value)
    setUsername(value);
  }

  const onChangeAgeHandler = (event) => {
    let value = event.target.value;
    console.log(value)
    setAge(value);
  }

  const errorHander = () =>{
    setError(null)
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHander}/>}
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>
          Username
        </label>
        <input
          type='text'
          id='Username'
          value={username}
          onChange={onChangeNameHandler}
        />

        <label htmlFor='age'>
          Age(Year)
        </label>
        <input
          id='age'
          type='number'
          value={age}
          onChange={onChangeAgeHandler} 
        />

        <Button type='submit' onClick={submitHandler}>Submit</Button>
      </form>
    </Card>
    </Wrapper>
  )
}

export default Input