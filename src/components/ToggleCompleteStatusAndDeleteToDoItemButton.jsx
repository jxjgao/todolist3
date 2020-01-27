import React from "react";

export default props  => (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div>
            {props.toDoItem.userInputText}
        </div>
        <button onClick={props.toggleItemAsCompleted}>✔</button>
        <button onClick={props.onDelete}>x</button>
    </div>
);