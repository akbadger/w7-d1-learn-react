import React from 'react'
import { browserHistory } from 'react-router'

class Nav extends React.Component {
    render() {
        return <div>
                    <div className="well text-center">
                        <div className="btn-group">
                            <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/Completed')}>
                                Completed
                            </button>
                            <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>
                                All
                            </button>
                        </div>
                    </div>
        
                </div>
    }
}

export default Nav