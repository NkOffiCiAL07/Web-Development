import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModel';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    };
    
    const userNameChangeHandler = (event) => {
        setUserName(event.target.value); 
    };

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    };

  const addUserHandler = (event) => {
      event.preventDefault();
      if (userName.trim().length === 0 || userAge.trim().length === 0) {
          setError({
              title: 'Invalid input',
              message: 'Please enter a valid name and age(non- empty values).'
          });
          return;
      }
      
      if (+userAge < 1) { 
          setError({    
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0).'  
          });
          return;
      }
      
      props.onAddUser(userName, userAge);
      setUserAge('');   
      setUserName('');
  };

    return (
        <div>   
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input placeholder='input userName' id="username" type="text" value={userName} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input placeholder = 'input age' id="age" type="number" value={userAge} onChange={userAgeChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
            </Card>
            </div>
  );
};

export default AddUser;
