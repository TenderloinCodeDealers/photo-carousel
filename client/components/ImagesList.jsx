import React from 'react';
import axios from 'axios';
import ImageEntry from './ImageEntry.jsx';

class ImagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          _id: '5b933a655b7faa4d2a4e8dec',
          id: 22,
          image: 'https://s3-us-west-1.amazonaws.com/vourcher/restaurant+images/image-2.jpg',
          __v: 0
        }
      ]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/:id/api/images').then(results => {
      this.setState({
        images: results.data
      });
    });
  }

  render() {
    return (
      <div>
        <div>images!!!</div>
        {this.state.images.map(image => (
          <ImageEntry key={image._id} image={image} />
        ))}
      </div>
    );
  }
}

export default ImagesList;
