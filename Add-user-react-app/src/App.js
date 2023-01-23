import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [list, setlist] = useState([{ name: "John", age: 20 }, { name: "Joe", age: 22 }]);

  const addUserHandler = (uName, uAge) => {
    setlist((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={list} />
    </div>
  );
};

export default App;
