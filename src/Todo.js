import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
          isEditing: false,
          task: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id)
    }



    toggleForm(){
      //when you click the edit button you want to update your task.
      //you must change isEditing state with setState. Therefore it
      //will be changed to be true
      this.setState({
        isEditing: !this.state.isEditing
      });

    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleUpdate(evt){
      evt.preventDefault()
      //take new task data and pass up to parent
      this.props.updateTodo(this.props.id, this.state.task)
      this.setState({isEditing: false});
    }

    handleToggle(evt){
      this.props.toggleTodo(this.props.id);
    }

    render(){
      let result;
      if(this.state.isEditing){
        result = (
          //inside the form if you have button to do sth
          //you must add method inside the form tag in blew you have just button
          <div className="Todo">
              <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                <input type="text"
                value={this.state.task}
                name="task"
                onChange={this.handleChange}/>
                <button>Save</button>
              </form>
          </div>
        );
      } else {
        result = (
          //when you want to use a button and do sth you must to add inline method
          // inside your button tag. first define it inside the class then bind it.
          <div className="Todo">
            <li className={this.props.completed ? "Todo-task completed" : "Todo-task"}
            onClick={this.handleToggle}>{this.props.task}
            </li>
            <div className="Todo-buttons">
                <button onClick={this.toggleForm}><i class="fas fa-edit"/></button>
                <button onClick={this.handleRemove}><i class="fas fa-trash-alt"/></button>
            </div>
          </div>
        );
      }
      return result ;
    }
  }

 export default Todo;
