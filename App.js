import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import UniqueId from 'react-html-id';
// import Box from "./src/components/navbar";
// import AA from "./testxexport";
// import ListAndKey from "./src/test/listandkey";
// import Form from "./src/test/form";
// import Ref from './src/test/Ref';
// var Ref = require('./src/test/Ref').cc;
// import ClassAndFucntionalCp from './src/test/ClassAndFunctionalCp';
// import TestState from './src/test/StateTech';
// import Child from './src/test/TechParent/child';
// import Parent from './src/test/TechParent/parent';
import User from './src/test/listandkey/User';
import { object } from "prop-types";

class RenderEveryThing extends React.Component {
    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this);
        this.state = {
            users: [
                {id:this.nextUniqueId() ,name: 'john', age:33},
                {id:this.nextUniqueId() ,name: 'peter', age:86},
                {id:this.nextUniqueId() ,name: 'jack', age:26}
            ]
        }
    }
    delUser(index, e) {
            const users = Object.assign([], this.state.users);
            users.splice(index,1);
            this.setState({users: users});
    }
    changeUserName(id, e) {
        const index = this.state.users.findIndex(function(user){
            return user.id === id;
        })
        const user = Object.assign({}, this.state.users[index]);
        user.name = e.target.value;
        
        const users = Object.assign([], this.state.users);
        users[index] = user;
        this.setState({users:users});
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.users.map(function(item, index) {
                            return (
                                <User
                                    key={item.id}
                                    age={item.age}
                                    delEvent={this.delUser.bind(this, index)}
                                    changeEvent={this.changeUserName.bind(this, item.id)}
                                >
                                    {item.name}
                                </ User>
                            )
                        }.bind(this))
                    }
                </ul>
            </React.Fragment>
                                    
        );
    }
}
ReactDOM.render(
    <RenderEveryThing />,
    document.getElementById('root')
);
