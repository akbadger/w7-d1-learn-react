import React from 'react'

import Todo from './Todo'
import AddTodo from './AddTodo'

class Todos extends React.Component {
    constructor(props) {
        super(props)
        // if you make a custom method you have to bind it in your constructor
        this.addTodo = this.addTodo.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.toggleTodoComplete = this.toggleTodoComplete.bind(this)

        this.state = {
            todos: []
        }
    }
// Lifecycle Methods
componentWillMount() {
    this.getTodos()
}

getTodos(){
    fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.setState({todos: todos}))
}
addTodo(todo) {
    this.getTodos()
    // let newTodos = this.state.todos
    // newTodos.unshift(todo)
    // this.setState({todos: newTodos})
}

toggleTodoComplete(todoId, isComplete) {
        if (isComplete) {
            fetch(`/api/v1/todos/${todoId}/complete`)
            .then(this.getTodos)
        }
    
        else {
            fetch(`/api/v1/todos/${todoId}/incomplete`)
            .then(this.getTodos)
        }
    }

    render() {
        let todos = this.state.todos.map((todo, key) => <Todo toggleTodoComplete={this.toggleTodoComplete} completed={todo.completed} id={todo.id} description={todo.todo} category={todo.category} key={key}/>)

        return  <div>
                    <h1 className="text-center text-uppercase">To Do</h1>
                    <AddTodo addTodo={this.addTodo}/>
                        <ul className="list-group">
                            {todos}                                                                 
                        </ul>
                </div> 
    }
}

export default Todos