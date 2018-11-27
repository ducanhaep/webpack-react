import React from 'react';
import {ThemeContext, themes} from './themed-context';
import ThemedButton from './themed-button';
import { stat } from 'fs';

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changTime}>
            Change Time
        </ThemedButton>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {theme: themes.light}
    
        this.toggleTheme = () => {
            this.setState(state => ({
                theme: 
                    state.theme === thems.dark
                    ? themes.light
                    : themes.dark,
            }));
        };
    }
    render() {
        // return (

        // )
    }
}