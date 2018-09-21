import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm'
import {todos} from './todos.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }

  removeTodo(index){
    var c = window.confirm("Are sure delete task?")
    if(c){
      this.setState({
        todos: this.state.todos.filter((e,i) => {
          return i !== index
        })
      })
    }
  }

  render() {

    const Todos = this.state.todos.map((todo, i) => {
      return (
          <div className="col-md-4">
            <div className="card mt-4">
                <div className="card-header">
                  <h3>{todo.title}</h3>
                  <span className="badge badge-pill badge-danger mt-2">{todo.priority}</span>
                </div>
                <div className="card-body">
                  <p>{todo.description}</p>
                  <p><mark>{todo.responsible}</mark></p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-danger btn-block" onClick={this.removeTodo.bind(this,i)}>Delete</button>
                </div>
            </div>
          </div>
      )
    });

    return (
      <div className="App">
        <Navigation titulo="Task" count={this.state.todos.length}/>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-8">
              <div className="row">
                {Todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
