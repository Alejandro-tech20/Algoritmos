import React, { useState } from 'react';
import { FormAdd } from './FormAdd'
import { ListItems } from './ListItems'
import './styles.css'

const ListInicial: TTodo[] = [
  { title: 'Correr', status: false, dia: 'Lunes' },
  { title: 'Saltar', status: false, dia: 'Martes' },
  { title: 'Caminar', status: false, dia: 'Martes' },
  { title: 'Nadar', status: false, dia: 'Martes' }
]

const App: React.FC = () => {
  const [listTodos, setListTodos] = useState(ListInicial);


  const addTodo: FormFunctionAdd = (ti) => {
    setListTodos([...listTodos, ti]);
  }
  const handleremove: LisFunction = (ti) => {
    const tem = listTodos.filter((item) => item.title !== ti);
    setListTodos(tem);
  }
  const handleRename: LisFunction = (ti) => {
    const tem = [...listTodos];
    tem.find((item) => item.title === ti)!.title = ti;
    setListTodos(tem);
  }
  const handleComplete: LisFunction = (ti) => {
    const tem = [...listTodos];
    tem.find((item) => item.title === ti)!.status = !tem.find((item) => item.title === ti)!.status;
    setListTodos(tem);
  }

  return (
    <>
      <ListItems
        todos={listTodos}
        remove={handleremove}
        rename={handleRename}
        complete={handleComplete}
      />
      <FormAdd todos={listTodos} add={addTodo} />
    </>
  );
}
// ================

// ====================
export default App;
