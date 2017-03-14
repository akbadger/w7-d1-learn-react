import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class Todos extends React.Component {
    render() {


        return  <div>
                    <br/>
                    <AddTodo />
                    <br/>
                        <ul className="list-group">
                            <Todo description="Make bed"/>
                            <Todo description="Eat cake"/>
                            <Todo description="Feed dog"/>
                            <Todo description="Go on a hike"/>
                            <Todo description="Go to sleep"/>                                                                   
                        </ul>
                </div>
                
            
    }
}

export default Todos