import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'input ne',
            valuetextarea: 'text area ne',
            valueselect: 'coconut'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        alert(`A name was submitted: ` + this.state.value.toLocaleUpperCase());
        alert(`A name was submitted: ` + this.state.valuetextarea.toLocaleUpperCase());
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <lable>
                        Name:
                        <input type="text" name="value"
                        value={this.state.value} onChange={this.handleChange} />
                    </lable>
                    <br />
                    <label>
                        Easy:
                        <textarea name="valuetextarea" value={this.state.valuetextarea} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <select name="valueselect" value={this.state.valueselect} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </React.Fragment>
        );
    }
}
export default Form;