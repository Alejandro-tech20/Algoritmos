import {useState, ChangeEvent} from 'react'

export const useForm =(initial:TTodo)=>{
// eslint-disable-next-line react-hooks/rules-of-hooks
const [values, setValues] = useState<TTodo>(initial);
return [values,
    (e:ChangeEvent<HTMLInputElement>)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }];
}