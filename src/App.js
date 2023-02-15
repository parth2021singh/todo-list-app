import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';

import {useDispatch, useSelector} from "react-redux"
import {deleteAll} from "./redux/actions"
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';


function App() {

  const [editFormDisplay,setEditFormDisplay]=useState(false)
  const [editTodo,setEditTodo]=useState("")


  const dispatch = useDispatch()
  const todos=useSelector(state=>state.operationsReducer)

const handleEditClick=(todo)=>{
  setEditFormDisplay(true)
  setEditTodo(todo)
}

const cancelUpdate=()=>{
  setEditFormDisplay(false)
}
  return (
    <div className="App">
     <h1 className='title'>TODO-APP</h1>
     <Form editFormDisplay={editFormDisplay} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
     <Todos handleEditClick={handleEditClick} editFormDisplay={editFormDisplay}/>
     {todos.length >0 && ( 
     <button className='del-btn' onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
     )}
     
     <ScrollToTop/>
    </div>
  );
}

export default App;

