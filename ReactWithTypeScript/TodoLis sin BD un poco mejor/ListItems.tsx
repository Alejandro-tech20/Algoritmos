import React from 'react'
import { Task } from './Task'

export const ListItems: React.FC<ListTaskProps> = ({ todos,
    rename, remove, complete
}) => {

    return <ul>
        {todos.map((item) => {
            return <Task
                task={item}
                remove={remove}
                rename={remove}
                complete={complete}
            />
        })}
    </ul>;
}

