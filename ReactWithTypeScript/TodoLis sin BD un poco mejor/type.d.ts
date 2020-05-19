type TTodo={
    title:string;
    dia?: string;
    status?:boolean;
}

type FormFunctionAdd=(title:TTodo)=> void;
type LisFunction=(title:string)=> void;