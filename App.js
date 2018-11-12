import React from "react";
import ReactDOM from "react-dom";
import './src/components/navbar';
import Box from "./src/components/navbar";
class Lopne extends React.Component {
    render() {
        return <h1>He Nho tao la Lopne</h1>;
    } 
}
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Tran',
    lastName: 'Duc Anh1'
};
const element = (
    <h1>Hello!, {formatName(user)}!</h1>
);
function Fn(){
    return <h1>Hello {getGreeting(user)} </h1>;
}
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
function Welcome(cc) {
    return <h1>Hello, {cc.name} {cc.ho}</h1>;
}
function Testprop(){
    return (
        <div>
            <Welcome name = "ghoshogs" />
        </div>
    );
}
const cons1 = <Welcome name="DucAnh" />;
class Testprop1 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>{this.props.children}</p>
                <h1>Hello {this.props.name}</h1>
            </React.Fragment>
        );
    }
}

class abc {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    tus () {
        console.log("tu");
    }
}
class ducanh extends abc  {
    constructor(c) {
        super(c);
    }
    
    
}

class TestState extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'tran duc anh'};
        this.state = {number: 0};
    }
    handleChange(e){
        this.setState({value: e.target.value });
    }
    clickAlert(){
        alert(this.state.value);
    }
    increaseValue(){
        this.setState({number: this.state.number  + 1})
    }
    decreaseValue(){
        this.setState({number: this.state.number - 1})
    }
    render(){
        return (
            <React.Fragment>
                <span>{this.state.value}</span>
                <br />
                <input
                    onChange={this.handleChange.bind(this)}
                />
                <button onClick={this.clickAlert.bind(this)}>
                    Click Here
                </button>
                <br />
                <br />
                <button onClick={this.decreaseValue.bind(this)}>-</button>
                <input value = {this.state.number}/>
                <button onClick={this.increaseValue.bind(this)}>+</button>
            </React.Fragment>
        );
    }
}
// const element2 = (
//     <React.Fragment>
//         <Testprop1 name="Mytour.vn"/>
//         <Testprop1>
//             eheheheheheheh    
//         </Testprop1>
//     </React.Fragment>
    
// );
class RenderEveryThing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Testprop1 name="Mytour.vn" />
                <Testprop1>
                    eheheheheheheh
                </Testprop1>
            </React.Fragment>
        );
    }
}
ReactDOM.render(
    <TestState />,
    document.getElementById('root')
);
