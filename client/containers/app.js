import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                How would you like to process your image?
                <Link to="/autoProcess">
                    <button>Auto Process Image</button>
                </Link>
                <Link to="/manualProcess">
                    <button>Manual Process Image</button>
                </Link>
            </div>
        )
    }
}

export default connect(state => state)(App);