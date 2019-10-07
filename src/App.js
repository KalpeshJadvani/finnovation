import React, { Component } from 'react';
import NoData from './components/NoData';
import Albomcard from './components/Albomcard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      error: false,
      dataLoding: true,
      visible: 2
    };
    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadPhotos,
        state: { error, isLoading }
      } = this;

      if (error || isLoading) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadPhotos();
      }
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => {
        this.setState(
          {
            albums: albums,
            dataLoding: false
          },
          () => {
            this.loadPhotos();
          }
        );
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error: true,
          dataLoding: false
        });
      });
  }
  // this function call on scroll
  loadPhotos = () => {
    if (this.state.visible < this.state.albums.length - 1) {
      // here i check that, is there more items ? then increment in 'visible' state by '1'
      this.setState({ isLoading: true }, () => {
        this.setState(prev => {
          return {
            visible: prev.visible + 1,
            isLoading: false
          };
        });
      });
    }
  };
  render() {
    const { dataLoding, albums, visible, isLoading } = this.state;
    return (
      <div className="App">
        {dataLoding ? (
          <NoData msg={'Loding...'} />
        ) : (
          <div className="box">
            {albums.length === 0 ? (
              <NoData msg={'Data Not Found.'} />
            ) : (
              visible < albums.length && // slice will retune new array accoring 'visible' value
              albums.slice(0, visible).map(function(album, index) {
                return <Albomcard album={album} key={index} />;
              })
            )}
            {isLoading && <div>Loading...</div>}
          </div>
        )}
      </div>
    );
  }
}
export default App;
