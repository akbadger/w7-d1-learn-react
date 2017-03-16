import React from 'react'
import Nav from './Nav'
import Todo from './Todo'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

class Completed extends React.Component { 

    
    render() {
        let todos = this.props.sharedTodos.filter(todo => todo.completed === 'yes')

        todos = todos.map((todo, key) => <Todo key={key} {...todo} />)

        return  <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                    <h1 className="text-center text-uppercase">
                        Completed Tasks
                    </h1>
                    <Nav />
                    <ul className="list-group">
                        {todos}
                    </ul>
                        </div>
                    </div>
                </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Completed)