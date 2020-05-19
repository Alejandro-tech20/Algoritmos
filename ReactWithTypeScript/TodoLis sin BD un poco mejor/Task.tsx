import React from 'react'

export const Task: React.FC<TaskProps> = ({ task,
    rename, remove, complete
}) => {

    return <li style={{ background: task.status ? 'rgba(255, 0, 0, 0.356)' : 'none' }}>
        <label style={{ color: task.status ? 'red' : 'black' }}>
            <div className="divTitle">
                {task.title}
            </div>
            <div>
                {task.dia}
            </div>
            <div className="functions">
                <button onClick={(_) => remove(task.title)} >X</button>
                <input type='checkbox' checked={task.status} onChange={(_) => complete(task.title)} />
            </div>
        </label>
    </li>
}