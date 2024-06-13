import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-list</h1>

            <div>
                <input 
                type="text" 
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}
                />
            </div>

            <button 
            className="addButton" 
            onClick={addTask}>
                Add
            </button>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                        className="deleteButton"
                        onClick={() =>deleteTask(index)}>
                            Delete
                        </button>
                        <button
                        className="moveButton"
                        onClick={() =>moveTaskUp(index)}>
                            UP
                        </button>
                        <button
                        className="moveButton"
                        onClick={() =>moveTaskDown(index)}>
                            DOWN
                        </button>
                    </li>
                )}
            </ol>

        </div>
        
        
    )

}

export default ToDoList