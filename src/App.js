/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css';
import {useState, useEffect} from 'react';
import {db} from './firebase-config';
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore';

function App() {
  const [newName, setNewName] =  useState("");
  const [newAge, setNewAge] =  useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');


  const createUser = async () =>{
    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
  }

  const updateUser = async(id, age)=>{
    const userDoc = doc(db, "users" , id);
    const newField = {age: age + 1};
    await updateDoc(userDoc, newField);
  }

  const deleteUser = async(id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
    }
    getUsers();
  }, [0]);


  return (
    <div className="App">
      <input type="text" placeholder='Name...' 
      onChange={(event)=>{
        setNewName(event.target.value)
      }}
      />
      <input type="number" placeholder='Age...' 
      onChange={(event)=>{
        setNewAge(event.target.value)
      }}
      />
      <button onClick={createUser}> Create User </button>
       {users.map((user) => {
         return (
           <div>
             {" "}
             <h2>Name: {user.name}</h2>
             <h2>Age: {user.age}</h2>
             <button 
               onClick={()=> {
               updateUser(user.id , user.age);
               }}>
              Increase</button>

              <button onClick={()=> {
                deleteUser(user.id);
                }} >Delete User</button>

           </div>
         );
       })}
    </div>
  );
}

export default App;
