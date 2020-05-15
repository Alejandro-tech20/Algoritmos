// =========================
import * as React from 'react';
import { IHandleTodoItem } from './InterfaceTodo';

const HandleTodoItem = (props: IHandleTodoItem) => {

    return (
        <div>
            <div onClick={() => (
                props.handleTodoItemComplete(props.todo.id)
            )}>
                {props.todo.isCompleted ? (<span>Completed</span>) : (<span>No Completed</span>)

                }
            </div>
            {/* ============ */}
            <div>
                <input
                    value={props.todo.text}
                    onBlur={props.handleTodoItemBlur}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoItemUpdate(event, props.todo.id)} />
            </div>
            {/* =============== */}
            <div onClick={() => props.handleTodoItemRemove(props.todo.id)} >
                X
            </div>
        </div>
    )
}
//  TodoItem
export default HandleTodoItem;