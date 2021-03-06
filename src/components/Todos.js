import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

// Loading in components
import Todo from './Todo'
import AddTodo from './AddTodo'
import Nav from './Nav'

class Todos extends React.Component {

    //Setup
    constructor(props) {
        super(props)
        // if you make a custom method you have to bind it in your constructor
        this.addTodo = this.addTodo.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.toggleTodoComplete = this.toggleTodoComplete.bind(this)

        // Initial state
        // this.state = {
        //     todos: []
        // }
    }

// React lifecycle Methods
componentWillMount() {
    this.getTodos()
}

//API methods
getTodos(){
    fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))
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
        let todos = this.props.sharedTodos.map((todo, key) => <Todo toggleTodoComplete={this.toggleTodoComplete} completed={todo.completed} id={todo.id} todo={todo.todo} category={todo.category} key={key}/>)

        if (todos.length === 0) {
            todos = <div className="alert alert-success text-center">What do you need to do?</div>
                   
        }
        return  <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <h1 className="text-center text-uppercase">To Do</h1>
                            <Nav />
                            <AddTodo addTodo={this.addTodo}/>
                                <ul className="list-group">
                                    {todos}                                                                 
                                </ul>
                        </div>
                    </div>
                </div> 
    }
}

// Add link deciphering for images vs URLs
// var note ={
//     'http://giphy.com'
// } 
// var isImage = false

// if (note.link.slice(-4) === '.gif' || note.link.slice(-4) === '.png' || note.link.slice(-4) === '.jpg' ) {
//     isImage= true
// }

// <img src={isImage ? note.link} /> : <a href={note.link} className="btn btn-default btn-block">visit {note.link}</a>



// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)