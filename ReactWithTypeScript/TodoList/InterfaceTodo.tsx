// ===========
// TodoInterface
export interface ITodo{
    id:string;
    text:string;
    isCompleted:boolean;
}
// TodoFormInterface
export interface IFormListTodo{
    todos:ITodo[];
    handleTodoCreate:(todo:ITodo)=> void;
}
// TodoListInterface
export interface IListHandleTodo{
    handleTodoUpdate:(event: React.ChangeEvent<HTMLInputElement>, id:string)=>void;
    handleTodoRemove:(id:string)=>void;
    handleTodoComplete:(id:string)=>void;
    handleTodoBlur:(event: React.ChangeEvent<HTMLInputElement>)=>void;
    todos:ITodo[];
}
// TodoItemInterface
export interface IHandleTodoItem{
    handleTodoItemUpdate:(event: React.ChangeEvent<HTMLInputElement>,id:string)=>void;
    handleTodoItemRemove:(id:string)=>void;
    handleTodoItemComplete:(id:string)=>void;
    handleTodoItemBlur:(event: React.ChangeEvent<HTMLInputElement>)=>void;
    todo:ITodo;
}