import React from 'react';
import Todos from './Todos'

class App extends React.Component {
    render() {

        // let Images = []

        // for (let i = 0; i < 1; i++) {
        //     Images.push(<Image number={i} />)
        // }


        // On the return line, you MUST have your first opening JSX tag.
        return <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <Todos/>                                                       
                        </div>
                    </div>
                </div>
    }
}

export default App