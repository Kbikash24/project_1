import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);


  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);
    setIsValid(inputValue.trim().length !== 1);
    setIsEmpty(inputValue.trim().length === 0);
    
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (enteredValue.trim().length === 1) {
      setIsValid(false);
      return;
    }
    if (enteredValue.trim().length === 0) {
      setIsEmpty(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" isEmpty={isEmpty}  disabled={isEmpty}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
