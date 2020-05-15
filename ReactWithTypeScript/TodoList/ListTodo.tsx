// ==========
import * as React from 'react';
import HandleTodoItem from './HandleTodoItem'
import {IListHandleTodo} from './InterfaceTodo'

const ListTodo = (props: IListHandleTodo)=>{

    return (
        <div className="list">
            <ul>
                {props.todos.map((item)=>(
                    <li key={item.id}>
                        <HandleTodoItem todo={item}
                        handleTodoItemUpdate={props.handleTodoUpdate}
                        handleTodoItemRemove={props.handleTodoRemove}
                        handleTodoItemComplete={props.handleTodoComplete}
                        handleTodoItemBlur={props.handleTodoBlur}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListTodo;