import React, { Component } from 'react';
//install uuid package to get uniqe id for every task (npm install uuid)
const { v4: uuidv4 } = require('uuid');


class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {task: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        // Here, a preventDefault is called on the event when
        // submitting the form to prevent a browser reload/refresh.
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4(), completed: false });
        this.setState({task: ""});
    }

    render(){
      return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="task">New Todo</label>
            <input
            type="text"
            placeholder="write your task"
            id ="task"
            name="task"
            value={this.state.task}
            onChange = {this.handleChange}
            />
            <button>Add</button>
        </form>

      );
    }
  }

 export default NewTodoForm;
