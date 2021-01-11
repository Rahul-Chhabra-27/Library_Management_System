import React from 'react';

function Input(props){

    return(
        <div className="form-group">
            <label for={props.for}>{props.main}</label>
            <input value={props.value} type={props.type} id={props.id} className={props.className}></input>
        </div>
    )
}
export default Input;