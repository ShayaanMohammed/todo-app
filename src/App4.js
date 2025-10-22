import React, {useState} from "react";

function App4(){
    const [message, setMessage] = useState("");

    const showDate = () => {
        const now = new Date().toLocaleDateString();
        setMessage(now);
    };

    const showGB = () => {
        setMessage("Goodbye!");
    };

    return(
        <div>
            <h2>Message: {message}</h2>
            <button onClick={showDate}>Date</button>
            <button onClick={showGB}>Goodbye!</button>
        </div>
    );
}

export default App4;