import React from 'react'
import {TodoListItems} from './TodoListItem'

interface TodoListProps{
    todos:Todo[];
    toggleTodo:ToogleTodo
}

export const TodoList:React.FC<TodoListProps> = ({todos,toggleTodo})=>{

    return(
        <ul>
            {todos.map((item)=>{
                return<TodoListItems 
                key={item.text}
                todo={item} toogleTodo={toggleTodo}/>;
            })}
        </ul>
    )
}