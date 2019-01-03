import React from 'react';

const User = function(props) {
    return(
        <li>
            name: {props.children} | age: {props.age}
            <input onChange={props.changeEvent} value={props.children}/>
            <button onClick={props.delEvent}>Delete</button>
        </li>
    )
}

export default User;