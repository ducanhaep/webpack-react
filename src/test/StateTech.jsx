import React, { Fragment } from 'react';

class TestState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Duc Anh"
        }

    }
    changeName = (newName) => {
        this.setState({name:newName})
    }
    render() {
        return (
            <Fragment>
                <button onClick={() => this.changeName(':v')}>BTN</button>
                <br />
                <br />
                <div>{this.state.name}</div>
            </Fragment>
        );
    }
}
export default TestState;