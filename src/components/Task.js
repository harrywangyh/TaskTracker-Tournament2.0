import {FaTimes} from 'react-icons/fa';
import '../App.css';
const Task = ({task, onDelete, onAdvance, currentRound,}) => {
    const handleDoubleClick = () =>{
        onAdvance(task.id,currentRound);
    }
    return (
        <div  
            onDoubleClick = {handleDoubleClick}
            className = 'task'
            style = {{
                gridRow: task.id,
            }}
        >
            <h4>{task.text}
            <FaTimes
                style={{color:'red', cursor: 'pointer'}
                }
                onClick = {() => onDelete(task.id,currentRound)}
                />
            </h4>
        </div>
    )
}

export default Task
