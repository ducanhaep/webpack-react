import React, { Fragment } from 'react';

const Child = (props) => {
    return(
        <Fragment>
            <h3>{props.title}</h3>
            <div>
                {props.content}
            </div>
        </Fragment>
    );
}
export default Child;