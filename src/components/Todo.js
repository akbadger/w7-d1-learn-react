import React from 'react'

class Todo extends React.Component { 

    
    render() {
        return  <div>
                    <li className="list-group-item">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" onChange={(e) => this.props.toggleTodoComplete(this.props.id, e.target.checked)} checked={this.props.completed === 'yes' ? true : false} /> 
                                <span className={this.props.completed === 'yes' ? 'done' : ''}>{this.props.description} </span>
                                <span className="label label-success categoryLabel">{this.props.category}</span>
                            </label>
                        </div>
                    </li>
                </div>    
    }
}

Todo.propTypes = {
    id: React.PropTypes.any.isRequired,
    completed: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    category: React.PropTypes.string.isRequired,
    // toggleTodoComplete: React.propType.func.isRequired
}

export default Todo