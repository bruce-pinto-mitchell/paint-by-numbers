import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from "../components/Carousel";

export default class AutoProcess extends React.Component {
    render() {
        return (
            <div>
                Please select the Image below you wish to paint by numbers
                <Carousel/>
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div>
        )
    }
}

