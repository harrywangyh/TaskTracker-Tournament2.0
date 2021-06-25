import AddTask from "./AddTask";
import Task from "./Task";


const Tasks = (props) => {
    const place = props.currentRound+1;
    const placeEnd = place+1;
    return (
        <div className='tasks'
            style = {{
                gridTemplateRows: 'repeat('+props.tasks.length +',1fr)',
                gridColumn: place+'/'+placeEnd,
        }}>
            {props.tasks.map((task) =>
            (
            task.used ?
            <Task  
                key={task.id} 
                task= {task} 
                onDelete = {props.onDelete} 
                onAdvance = {props.onAdvance} 
                currentRound = {props.currentRound}
            />
            :
            <AddTask  
                key={task.id}
                task = {task} 
                onAdd = {props.onAdd}  
                currentRound = {props.currentRound} 
                placeholder={props.placeholder}
            />
            ))
            
            }
        </div> 
    )
}

export default Tasks
