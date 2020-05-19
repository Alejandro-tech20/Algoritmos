
interface ListTodos{
    todos: TTodo[];
}

interface FormAddProps{
    todos:TTodo[];
    add: FormFunctionAdd;
}
interface ListTaskProps{
    todos:TTodo[];
    remove:(title:string)=>void;
    rename:(title:string)=>void;
    complete:(title:string)=>void;
}
interface TaskProps{
    task:TTodo;
    remove:(title:string)=>void;
    rename:(title:string)=>void;
    complete:(title:string)=>void;
}