import React, { Component } from 'react';

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleSubmitTask } = this.props;
        const { text } = this.state;
        handleSubmitTask(text);
        this.setState({ text: '' });
    }

    render() {
        const { text } = this.state;
        return (
            <form action="">
                <input type="text" name="" id="" value={text} onChange={this.handleChange} />
                <input type="submit" value="Add task" name="" id="" onClick={this.handleSubmit} />
            </form>
        );  
    }
};

export default TaskInput;
