import React, { Fragment } from 'react';
import Child from './child';

class Parent extends React.Component {
    render() {
        return(
            <Fragment>
                <Child {...this.props}/>
            </Fragment>
        )
    }
}
export default Parent;