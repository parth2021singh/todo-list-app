import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Todos.css"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeTodo, handleCheckbox} from '../redux/actions';

const Todos = ({handleEditClick,editFormDisplay}) => {
    
      const todos =useSelector((state)=>state.operationsReducer)
      //console.log(todos)
      const dispatch=useDispatch()
  return (
    <div>
      {
        todos.map((todo)=>{
           return (
            <div key={todo.id}>
                <div className='todos-data'>                   

                {editFormDisplay===false&&(
                     <input type="checkbox" checked={todo.completed}
                     onChange={()=>dispatch(handleCheckbox(todo.id))}
                     />)}
                <p style={todo.completed===true?{textDecoration:"line-through"}:{textDecoration:"none"}}>{todo.todo}</p>
                 {
                    editFormDisplay===false&&(
                        <>
                         <span className='icon' onClick={()=>handleEditClick(todo)}><EditIcon/></span>
                        <span className='icon' onClick={()=>dispatch(removeTodo(todo.id))}><DeleteIcon/></span>
                        </>
                    )
                }
            </div>
            </div>
           )     
        })
      }
    </div>
  )
}

export default Todos
