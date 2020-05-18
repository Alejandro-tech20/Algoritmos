 type Todo={
    text:string;
    complete:boolean;
}
type ToogleTodo= (seletedTodo:Todo)=>void;
type AddTodo=(newTodo:string)=>void;