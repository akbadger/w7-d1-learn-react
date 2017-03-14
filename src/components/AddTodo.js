import React from 'react'

class AddTodo extends React.Component {
    render() {
        return      <div className="input-group">
                        <input type="text" className="form-control" placeholder="What do you need to do?"/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Add</button>
                        </span>
                    </div>
    }
}

export default AddTodo