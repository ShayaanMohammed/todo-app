import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App3(){
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return(
        <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
            <h2>React Todo Application</h2>
            <TodoForm addTask={addTask}/>
            <TodoList tasks={tasks} deleteTask={deleteTask}/>
        </div>
    );
}

export default App3;