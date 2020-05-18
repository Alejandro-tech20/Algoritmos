import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm'

const initialTodos: Todo[] = [
  { text: "Lavar", complete: false },
  { text: 'cocinar', complete: false },
  { text: 'Limpiar', complete: true }
]

const App: React.FC = () => {
  const [todo, setTodo] = useState(initialTodos)

  const toggleTodo: ToogleTodo = selectodo => {
    const newTodo = todo.map((item) => {
      if (item === selectodo) {
        return {
          ...item,
          complete: !item.complete
        }
      }
      return item;
    }
    );
    setTodo(newTodo);
  }
  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' && setTodo([...todo, { text: newTodo, complete: false }])
  }

  return (
    <>
      <TodoList todos={todo} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
