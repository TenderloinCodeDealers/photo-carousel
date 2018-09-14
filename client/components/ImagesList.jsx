import React from 'react';
import axios from 'axios';
import ImageEntry from './ImageEntry.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import PrimaryImage from './PrimaryImage.jsx';
import styles from '../styles/ImagesList.css';

class ImagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          _id: '5b9b29456e90510457754554',
          id: 22,
          image: 'https://s3-us-west-1.amazonaws.com/vourcher/food+images/image-17.jpg',
          __v: 0
        },
        {
          _id: '5b9b29456e90510457754556',
          id: 22,
          image: 'https://s3-us-west-1.amazonaws.com/vourcher/food+images/image-18.jpg',
          __v: 0
        },
        {
          _id: '5b9b29456e90510457754555',
          id: 22,
          image: 'https://s3-us-west-1.amazonaws.com/vourcher/food+images/image-19.jpg',
          __v: 0
        },
        {
          _id: '5b9b29456e90510457754557',
          id: 22,
          image: 'https://www.youtube.com/embed/9N4Nd0Ct5yU',
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
    if (this.state.index === 0) {
      this.setState({ index: this.state.images.length - 1 });
    } else {
      this.setState(prevState => ({
        index: prevState.index - 1
      }));
    }
  }

  handleRightClick() {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState(prevState => ({
        index: prevState.index + 1
      }));
    }
  }

  render() {
    return (
      <div>
        <PrimaryImage image={this.state.images[this.state.index]} />
        <LeftArrow handleLeftClick={this.handleLeftClick.bind(this)} />
        <RightArrow handleRightClick={this.handleRightClick.bind(this)} />
        <div className={styles.container}>
          {this.state.images.map(image => (
            <ImageEntry key={image._id} image={image} />
          ))}
        </div>
      </div>
    );
  }
}

export default ImagesList;
