import React from 'react';
import Slider from 'react-slick';

export default class Carousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {
                    this.props.images.map(image => <div><img src={image.src}/></div>)
                }
            </Slider>
        )
    }
}