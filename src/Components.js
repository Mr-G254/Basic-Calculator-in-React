import React from "react";
import "./App.css"

function Input(props){
    return(
        <textarea type="text" className="Input" spellCheck="false" value={props.value} onKeyDown={(event)=>{event.preventDefault()}}/>
    );
}

function Button(props){
    return(
        <input type="button" className="Button" value={props.text} onClick={()=>{props.func(props.text)}}/>
    );
}

export{Input,Button}