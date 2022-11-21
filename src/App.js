
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Home from './Pages/Home';


function App() {

  const [width, setWindowWidth] = useState(0);
  useEffect(() => {

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  // document.body.style.backgroundColor = "black";

  // const [listOfUsers, setListOfUsers] = useState([]);
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(0);
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getUsers").then((response) => {
  //     setListOfUsers(response.data);
  //     console.log(response.data);
  //   })
  // }, [])

  // const onCreateUser = () => {
  //   Axios.post("http://localhost:3001/createUser", {
  //     name,
  //     age,
  //     username

  //   }).then((response) => {
  //     setListOfUsers([...listOfUsers, { name, age, username }]);
  //     alert("user created.");
  //   })
  // }
  return (
    <Home />

    // <div className="App">
    //   <div className="users-container">
    //     {listOfUsers.map((user) => {
    //       return <div className="user-info-container">
    //         <h1>Name: {user.name}</h1>
    //         <h1>Age: {user.age}</h1>
    //         <h1>Username: {user.username}</h1>
    //       </div>
    //     })}

    //   </div>
    //   <div>
    //     <input type="text" placeholder="NAME" onChange={(event) => { setName(event.target.value) }} />
    //     <input type="number" placeholder="AGE" onChange={(event) => { setAge(event.target.value) }} />
    //     <input type="text" placeholder="USERNAME" onChange={(event) => { setUsername(event.target.value) }} />
    //     <button onClick={onCreateUser}> Create User </button>
    //   </div>

    // </div>
  );
}

export default App;
