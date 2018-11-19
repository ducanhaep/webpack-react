import React, { Fragment } from "react";
import ReactDOM from "react-dom";
// import Box from "./src/components/navbar";
import AA from "./testxexport";
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
        // this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
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
                    onChange={(e) => this.handleChange(e)}
                />
                <button onClick={this.clickAlert.bind(this)}>
                    Click Here
                </button>
                <br />
                <br />
                <button onClick={this.decreaseValue.bind(this)}>-</button>
                <input value = {this.state.number}/>
                <button onClick={this.increaseValue.bind(this)}>+</button>
                <AA />
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

//////////////////////////////////////////////////////////////////////
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}
class UserGreeting extends React.Component {
    render() {
        return <h1>Welcome back!</h1>;
    }
}
class GuestGreeting extends React.Component {
    render() {
        return <h1>Please sign up</h1>;
    }
}
class LoginButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.cc}>
                Login
            </button>
        )
    }
}
class LogoutButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.cc}>
                Lotout
            </button>
        )
    }
}

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton cc={this.handleLogoutClick} />;
      } else {
        button = <LoginButton cc={this.handleLoginClick} />;
      }
  
      return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ?
            (<LoginButton cc= {this.handleLoginClick}/>)
            :
            (<LogoutButton cc={this.handleLogoutClick}/>)
            }
        </div>
      );
    }
}
/////////////////////////////////////////////////////////////////////////////

class WarningBanner extends React.Component {
    render() {
        if(!this.props.warn) {
            return null;
        }
        return(
            <div className="warning">
                Warning!
            </div>
        )
    }
}
// function WarningBanner(props) {
//     if(!props.warn) {
//         return null;
//     }
//     return (
//         <div className="warning">
//             Warning!
//         </div>
//     );
// }

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        // this.setState((cc) => ({
        //     showWarning: !cc.showWarning
        // }));
        // this.setState({showWarning: !this.state.showWarning})
        this.setState(function(cc){
            return {
                showWarning: !cc.showWarning
            }
        })
        // this.setState(function(){
        //     return {
        //         showWarning: !this.state.showWarning
        //     }
        // })
    }
    render() {
        return (
            <React.Fragment>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </React.Fragment>

        )
    }
}
////////////////////////////////////////////////////////////////////////////////
function increseScore(state, props) {
    return {score: state.score + 1};
}
class Stateoutside extends React.Component {
    constructor() {
        super();
        this.state = {score: 1};
    }
    handleIncreaseScore () {
        this.setState(increseScore);
    }
    render() {
        return (
            <React.Fragment>
                <button onClick = {this.handleIncreaseScore.bind(this)}>
                    {this.state.score}
                </button>
            </React.Fragment>
        )
    }
}
/////////////////////////////////////////////////////////////////////////////////
class RenderEveryThing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Testprop1 name="Mytour.vn" />
                <Testprop1>
                    eheheheheheheh
                </Testprop1>
                <TestState />
                <br />
                <br />
                <LoginControl />
                <br />
                <br />
                <Page />
                <br />
                <br />
                <br />
                <Stateoutside />
            </React.Fragment>
        );
    }
}
ReactDOM.render(
    // <TestState />,
    // <LoginControl />,
    // <Page />,
    <RenderEveryThing />,
    document.getElementById('root')
);
