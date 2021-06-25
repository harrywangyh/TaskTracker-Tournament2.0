import { useState } from "react";
const AddTask = ({task,onAdd, currentRound , placeholder,}) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSubmit(e);
        }
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            alert('please add a task');
            return;
        }
        if(text.length > 26){
            alert('A task cannot be longer than 26 characters long');
            return;
        }
        onAdd(task.id,{
                text,
                day,
        },currentRound)
        setText('');
        setDay('');
    }
    return (
        <input
            onKeyDown = {handleKeyDown}
            type='text' 
            placeholder = {placeholder} 
            value = {text} 
            onChange={(e)=> setText(e.target.value)}
            className = 'task'
                style = {{
                gridRow: task.id,
                }}
        />
    )
}

export default AddTask
