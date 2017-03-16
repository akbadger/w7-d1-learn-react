import React from 'react'

class AddTodo extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            description: '',
            category: '',
            addTodo: props.addTodo
        }
    }

    onClick() {
        // 1. POST to api/v1/todos
        fetch('/api/v1/todos', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: this.state.description,
                category: this.state.category, 
                completed: false
            })
        })
        .then(response => response.json())
        .then(response => {


        // 2. clear the form fields
            this.setState({
                description: '',
                category: ''
            })

        // 3. reload todo list
            this.state.addTodo(response)
        })
    }


    render() {
        return  <div>
                    <div className="form-group">
                        <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                            <option value="">Select Category...</option>
                            <option value="Work" >Work</option>
                            <option value="Bills">Bills</option>
                            <option value="Personal">Personal</option>
                            <option value="Projects">Projects</option>
                            <option value="Chores">Chores</option>
                        </select>
                    </div>
                    <div className="form-group">                    
                        <div className="input-group">
                            <input type="text" className="form-control" value={this.state.todo} onChange={(e) => this.setState({todo: e.target.value})} placeholder=""/>
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button" onClick={() => this.onClick()}>Add</button>
                            </span>
                        </div>
                    </div>
                </div>
    }
}

export default AddTodo