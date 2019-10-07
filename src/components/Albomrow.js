import React, { Component } from 'react';
import Albomitem from './Albomitem';
import NoData from './NoData';
import Slider from 'react-slick';

const settings = {
  // set configration for slide menu
  dots: true,
  infinite: false,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1125,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class Albomrow extends Component {
  state = {
    photos: [],
    error: false,
    dataLoding: true
  };
  componentDidMount() {
    fetch(
      'https://jsonplaceholder.typicode.com/photos?albumId=' + this.props.id
    )
      .then(response => response.json())
      .then(photos => {
        this.setState({
          photos: photos,
          dataLoding: false
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error: err.message,
          dataLoding: false
        });
      });
  }
  render() {
    const { photos, error, dataLoding } = this.state;
    return (
      <Slider {...settings}>
        {error ? (
          <div>{error}</div>
        ) : dataLoding ? (
          <NoData msg={'Loding...'} />
        ) : (
          photos.map(function(item, index) {
            return <Albomitem data={item} key={index} />;
          })
        )}
      </Slider>
    );
  }
}

export default Albomrow;
