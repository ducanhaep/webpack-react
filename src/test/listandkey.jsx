import React, { Component } from 'react'
import { number } from 'prop-types';

// const numbers = [1,2,3,4,5];
// const listItem = numbers.map((number) => (
//     <li>{number}</li>
// ));
class ListItem extends Component {
    render () {
        return (
            <li>{this.props.value}</li>
        )
    }
}
function NumberList(props) {
    const numbers = props.numbers;
    // const listItems = numbers.map((number) => (
    //     <li key={number.toString()}>{number}</li>
    // ));
    // const listItems = numbers.map((number) => (
    //     <ListItem key={number.toString()} value = {number} />
    // ))
    return (
        // <ul>{listItems}</ul>
        <ul>
            {numbers.map((number) => (
                <ListItem 
                    key={number.toString()}
                    value={number}
                />
            ))
            }
        </ul>
    );
}



class Blogs extends Component {
    sidebar() {
        return (
            <ul>
                {this.props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        )
    }
    content() {
        return (
            this.props.posts.map((post) =>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            )
        )
    }
    render() {
        return (
            <div>
                {this.sidebar.bind(this)}
                <hr />
                {this.content.bind(this)}
            </div>
        )
    }
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

var numbers = [2,3,4,6,7,8,2,1]
class ListAndKey extends Component {
    render () {
        return (
            <React.Fragment>
                {/* <NumberList numbers = {numbers} /> */}
                <Blogs posts = {posts}/>
            </React.Fragment>
        )
    }
}
export default ListAndKey;