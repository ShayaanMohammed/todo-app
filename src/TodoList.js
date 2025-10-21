import React, {useState} from "react";

function TodoList({tasks, deleteTask}){
    return(
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;