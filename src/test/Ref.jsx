import React from 'react';

class Ref extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.textInputFocus = this.textInputFocus.bind(this);
    }
    textInputFocus() {
        this.myRef.current.focus();
    }
    render() {
        return(
            <React.Fragment>
                <input
                    type="text"
                    ref={this.myRef}
                />
                <input
                    type="button"
                    onClick={this.textInputFocus}    
                    value="Focus the text input"
                />
            </React.Fragment>
        );
    }
}
class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount() {
        this.textInput.current.textInputFocus();
    }
    render() {
        return(
            <Ref ref={this.textInput} />
        );
    }
}

function CustomTextInput(props) {
    let textInput = React.createRef();
    function textInputFocus() {
        textInput.current.focus();
    }

    return (
        <React.Fragment>
            <input
                type="text"
                ref={textInput}
            />
            <input
                type="button"
                onClick={textInputFocus}    
                value="Focus the text input FN"
            />
        </React.Fragment>
    );
}

class CallbackRef extends React.Component {
    constructor(props) {
        super(props);
        this.CallbackRef = null;
        this.textInputFocus = this.textInputFocus.bind(this);
    }
    textInputFocus() {
        this.CallbackRef.focus();
    }
    render() {
        
        return(
            <React.Fragment>
                <input
                    type="text"
                    ref={el => this.CallbackRef = el }
                />
                <input
                    type="button"
                    onClick={this.textInputFocus}    
                    value="Focus the text input Callback"
                />
            </React.Fragment>
        );
    }
}
class FromRef extends React.Component {
    constructor(props) {
        super(props);
        // this.formRef = React.createRef();
        // this.formRefL = React.createRef();
        // this.formRefA = React.createRef();
        // this.formRefS = React.createRef();
        this.clickHandel = this.clickHandel.bind(this);
        // this.keyupHandel = this.keyupHandel.bind(this);
    }
    clickHandel() {
        this.formRef.focus();
    }
    keyupHandel(target, e) {
        if(e.keyCode === 13) {
            switch(target) {
                case 'firstName':
                    this.formRefL.focus();
                    break;
                case 'lastName':
                    this.formRefA.focus();
                    break;
                case 'age':
                    this.formRefS.focus();
                    break;
                case 'submit': 
                    this.formRef.focus();
                    break;
                default:
                    this.formRef.focus();
                    break;
            }
        }
    }
    render() {
        return(
            <React.Fragment>
                <div>
                    <span>FirstName</span>
                    <input
                        type="text"
                        ref={el => this.formRef = el}
                        onKeyUp={this.keyupHandel.bind(this,'firstName')}
                    />
                </div>
                <div>
                    <span>LastName</span>
                    <input
                        type="text"
                        ref={el => this.formRefL = el}
                        onKeyUp={this.keyupHandel.bind(this,'lastName')}
                    />
                </div>
                <div>
                    <span>Age</span>
                    <input
                        type="text"
                        ref={el => this.formRefA = el}
                        onKeyUp={this.keyupHandel.bind(this,'age')}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        ref={el => this.formRefS = el}
                        onKeyUp={this.keyupHandel.bind(this, 'submit')}
                    />
                </div>
            </React.Fragment>
        );
    }
}
module.exports.cc = FromRef;