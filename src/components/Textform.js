import React from 'react';
import { useState } from 'react';



export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleonChange = (event)=>{
        console.log("on changed");
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleLeClick = ()=>{
        let newText = text.length;
        setText(newText);
    }
    const [text,setText] = useState("enter text");
  return (
    <>
        <div>
            <h1 className="text-dark">{props.heading} </h1>
            <div className="form-group">
                <textarea className="border-3 border-black border-opacity-100 form-control"  value={text} onChange={handleonChange} id="textbox" rows="8"></textarea>
            </div>
             <br />
            <button className="me-3 btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="me-3 btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="me-3 btn btn-primary" onClick={handleLeClick}>Length of the Text</button>
        </div>
    </>
  )
}
