import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

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