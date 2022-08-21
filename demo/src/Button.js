import React from "react";
import "../src/style/button.css"

const Button=(props) => {
    console.log(props);
    return(
        <div>
            {
            props.type === "primary" && (
            <button className={props.type} onClick={props.basilinca}>{props.buttonText}</button>
         )}
           {
           props.type === "secondary" && (
            <button className={props.type} onClick={props.basilinca}>{props.buttonText}</button>   
        )}
        {
           props.type === "danger" && (
            <button className={props.type} onClick={props.basilinca}>{props.buttonText}</button>   
        )}
            
        </div>
    );
    
    
};

export default Button