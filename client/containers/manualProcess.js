import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from "../components/Carousel";

export default class ManualProcess extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Please select the Image below you wish to paint by numbers
                <Carousel images={}/>
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div>
        )
    }
}

