import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useForm } from './HookForm'

export const FormAdd: React.FC<FormAddProps> = ({ todos, add }) => {

    const [values, setValues] = useState<TTodo>({
        title: '', dia: '', status: false
    })
    const handleTexto = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const handleAdd = (e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault()
       values.title.trim() && add(values);
        setValues({ title: '', dia: '', status: false})
    }


    // const handleTexto=(e:ChangeEvent<HTMLInputElement>)=>{
    //     setTexto(e.target.value);
    // }

    return <form>

        <label className="form">
            <div>
                <input name='title' type="text" value={values.title} onChange={handleTexto} />
            </div>
            <div>
                <input name='dia' type="text" value={values.dia} onChange={handleTexto} />
            </div>
            <div>
                <button type="submit" onClick={handleAdd}>Add Task</button>
            </div>
        </label>
    </form>
}