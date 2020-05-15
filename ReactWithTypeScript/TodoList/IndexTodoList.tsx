import React, {useState, useEffect} from 'react';
import HandleTodoItem from './HandleTodoItem'
import ListTodo from "./ListTodo"
import FormListTodo from './FormTodo';
import { ITodo } from './InterfaceTodo';
import {db} from '../../../firebase';

// import {useFirebaseApp} from 'reactfire'

interface Tt{
    id:string;
    title:string;
}

const IndexTodoList = () => {
    const [todos, setTodos] = React.useState<ITodo[]>([]);
    
  const [todo, setTodo] = useState<Tt[]>([])
  useEffect(()=>{
    db.collection("todo")
    .get()
    .then(queryScnapshot=>{
        const todos= queryScnapshot.docs.map(doc=>({
            id:doc.id,
            title: doc.data().title,
        }));
        setTodo(todos);
    }).catch(error=>{
      console.log(" Este fue el error: ", error);
    });
  },[]);
    function handleTodoCreate(todo: ITodo) {
        const newTodo: ITodo[] = [...todos];
        newTodo.push(todo);
        setTodos(newTodo);
    }
    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        const newUpdatee: ITodo[] = [...todos];
        newUpdatee.find((todo: ITodo) => todo.id === id)!.text = event.target.value;
        setTodos(newUpdatee);
    }
    function handleTodoRemove(id: string) {
        const newRemove: ITodo[] = todos.filter((todo: ITodo) => todo.id !== id)
        setTodos(newRemove);
    }
    function handleTodoComplete(id: string) {
        const newComplete: ITodo[] = [...todos];
        newComplete.find((todo: ITodo) => todo.id === id)!.isCompleted = !newComplete.find((todo: ITodo) => todo.id === id)!.isCompleted

        setTodos(newComplete);
    }
    function handleBlur(event:React.ChangeEvent<HTMLInputElement>){
        if(event.target.value.length===0){
            event.target.classList.add('todo-input-error')
        }else{
            event.target.classList.remove('todo-input-error')
        }
    }

    return <div>
        <FormListTodo todos={todos} handleTodoCreate={handleTodoCreate}
        />
        <ListTodo todos={todos} handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove} handleTodoComplete={handleTodoComplete} handleTodoBlur={handleBlur}
        />

        <div className="todo-main" style={{top:'150px', position:"relative", left: '100px'}}>
            <ul>
                {todo.map((item:Tt, index:number)=>(
                <li key={index}>
                    {item.title}<div>{item.id}</div>
                </li>)
                )}
            </ul>
            </div>
    </div>
}

export default IndexTodoList;