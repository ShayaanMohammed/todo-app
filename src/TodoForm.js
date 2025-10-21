import React, {useState} from "react";

function TodoForm({addTask}){
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim() === "") return;
        addTask(task);
        setTask("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task"/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TodoForm;