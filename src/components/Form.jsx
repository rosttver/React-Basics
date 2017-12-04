import React from 'react';

import Button from './Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let title = e.target.value;
        this.setState({title});
    }

    handleSubmit(e){
        e.preventDefault();
        let title = this.state.title;
        if(title){
            this.props.onAdd(title);
            this.setState({title: ''});
        }
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" 
                value={this.state.title} 
                placeholder="your task"
                onChange={this.handleChange}
                />
                <Button type="submit">Some text</Button>
            </form>
        )
    }
}

export default Form;

Form.propTypes = {
    onAdd: React.PropTypes.func.isRequired,
    children: React.PropTypes.node,
}