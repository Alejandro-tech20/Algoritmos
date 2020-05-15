// ===================
import * as React from 'react'
import shortid from 'shortid'
import { ITodo, IFormListTodo } from './InterfaceTodo'
import {TextField, Box} from '@material-ui/core'

const FormListTodo = (props: IFormListTodo) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [formState, setFormState] = React.useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value)
    }
    function handleInputEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            const newTodo: ITodo = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false,
            }
            props.handleTodoCreate(newTodo)
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }
    return (
        <div style={{position:'relative', top:'100px'}}>
            <Box  component="span" >
            <TextField 
            ref={inputRef} 
            label="Enter new Work" 
            variant="outlined" 
            onChange={event=> handleInputChange(event)}
            size="small"
            
            />
            </Box>
            <input ref={inputRef}
                type="text"
                placeholder="Enter new Todo"
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )

}
export default FormListTodo;
