import React, { Fragment } from 'react';

class ClassAndFucntionalCp extends React.Component {
    
    render() {
        let age = this.props.age ? this.props.age : "NA";
        if(this.props.children) {
            return (
                <Fragment>
                    <div>Name: {this.props.children} | Age: {age}</div>
                </Fragment>
            )
        }
        else {
            return <div>Invalid Entry</div>
        }
    }
}
export default ClassAndFucntionalCp;