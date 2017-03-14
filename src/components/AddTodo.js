import React from 'react'

class AddTodo extends React.Component {
    render() {
        return  <div>
                    <select className="form-control">
                        <option>Select Category...</option>
                        <option>Work</option>
                        <option>Bills</option>
                        <option>Personal</option>
                        <option>Projects</option>
                        <option>Chores</option>
                    </select>
                    <br/>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="What do you need to do?"/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Add</button>
                        </span>
                    </div>
            </div>
    }
}

export default AddTodo