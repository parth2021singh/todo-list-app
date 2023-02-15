import React, { useEffect, useState } from 'react'
import './Form.css'
import { useDispatch } from 'react-redux'
import { addTodo,handleEditSubmit } from '../redux/actions'

const Form = ({editFormDisplay,editTodo,cancelUpdate}) => {

    const dispatch=useDispatch()

    const[todoValue,setTodoValue]=useState("")
    const [editValue,setEditValue]=useState("")
    
    //console.log("ev",editValue)


    useEffect(()=>{
        setEditValue(editTodo.todo)
    },[editTodo])

    function handleSubmit(e){
      e.preventDefault()
      let date=new Date()
      let time=date.getTime()
      let todoObj={
        id:time,
        todo:todoValue,
        completed:false
      }
      //console.log(todoObj.title)
      setTodoValue('')
      dispatch(addTodo(todoObj))
    }


    const editSubmit=(e)=>{
        e.preventDefault()

        let editedObj={
            id:editTodo.id,
            todo:editValue,
            completed:false
        }
        setEditValue('')
        dispatch(handleEditSubmit(editedObj))
    }

  return (
    <>
    {
    editFormDisplay===false ? (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter todo...' required className='input'
        value={todoValue}
        onChange={(e)=>setTodoValue(e.target.value)}/>
        <button className='add-btn' type="submit">ADD</button>
    </form>
    ):(
    <form onSubmit={editSubmit}>
        <div>
        <input type="text" placeholder='update todo...' required className='input'
        value={editValue||""}
        onChange={(e)=>setEditValue(e.target.value)}/>
        <button className='add-btn' type="submit">UPDATE</button>
        </div>
        <button className='back-btn' onClick={cancelUpdate}>BACK</button>
        
    </form>
    )}
    </>
    
  )
}

export default Form
