import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions"
import { data } from "../../apiData"

const initialState= [...data]
//console.log("id",initialState)
export const operationsReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADD_TODO:
        // to show added data on top  i have destructured the state at the end 
        return [action.payload,...state] 

        
        case REMOVE_TODO:
                const filteredTodos=state.filter((todo)=>todo.id!==action.payload)
                return filteredTodos
        
        case DELETE_ALL:
            return []

        case UPDATE_TODO:
            let data=action.payload
            const updatedArray=[]
         state.map((item)=>{
           if(item.id===data.id){
            item.id=data.id
            item.todo=data.todo
            item.completed=data.completed
        }
        updatedArray.push(item)
        })
        return updatedArray

        case UPDATE_CHECKBOX:
            let todoArray=[]
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed=!item.completed
                }
                todoArray.push(item)
            })
            return todoArray

        default: return state;
    
    }

}