import React from 'react'


interface TodoListProps {
    todo: Todo;
    toogleTodo: ToogleTodo;
}


export const TodoListItems: React.FC<TodoListProps> = ({ todo, toogleTodo }) => {
    return (<li style={{ listStyle: 'none', marginLeft: '30px' }}>
        <label style={{ color: todo.complete ? 'red' : 'black', margin: '10px' }}>
            <input 
            type='checkbox' 
            checked={todo.complete} 
            style={{ marginTop: '10px' }} 
            onChange={() => toogleTodo(todo)} />
            {todo.text}
        </label>
    </li>
    )
}