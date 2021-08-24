import React from "react";
import "./Note.scss"

function Note(props) {
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {
                props.onDelete(props.id)
            }}>DELETE</button>
        </div>
    )
}

export default Note;