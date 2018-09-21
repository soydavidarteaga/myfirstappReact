import React,{Component} from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
          [name]: value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state)
        this.state = {
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        }
    }
    render(){
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                          name="description"
                          cols=""
                          rows=""
                          className="form-control"
                          onChange={this.handleInput}
                          placeholder="Description"
                          >
                        </textarea>
                    </div>
                    <div class="form-group">
                      <select className="form-control" onChange={this.handleInput} name="priority" >
                        <option value="low">Low</option>
                        <option value="low">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <button className="btn btn-primary btn-block">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;
