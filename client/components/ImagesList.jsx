import React from 'react';
import axios from 'axios';
import ImageEntry from './ImageEntry.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';

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
      ],
      index: 0
    };
  }

  componentDidMount() {
    axios.get('/:id/api/images').then(results => {
      this.setState({
        images: results.data
      });
    });
  }

  handleLeftClick() {
    this.setState(prevState => ({
      index: prevState.index - 1
    }));
  }

  handleRightClick() {
    this.setState(prevState => ({
      index: prevState.index + 1
    }));
  }

  render() {
    return (
      <div>
        {this.state.images.map(image => (
          <ImageEntry key={image._id} image={image} />
        ))}
        <LeftArrow handleLeftClick={this.handleLeftClick.bind(this)} />
        <RightArrow handleRightClick={this.handleRightClick.bind(this)} />
      </div>
    );
  }
}

export default ImagesList;
