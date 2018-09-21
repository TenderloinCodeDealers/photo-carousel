import React from 'react';
import axios from 'axios';
import { Spring, animated } from 'react-spring';
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
    const id = window.location.pathname.split('/')[1];
    axios.get(`http://54.183.146.159/${id}/api/images`).then(results => {
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

  handlePreviewClick(index) {
    this.setState({ index });
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <Spring
            native
            config={{ tension: 280, friction: 90 }}
            from={{ filter: 'blur(3px)' }}
            to={{ filter: 'blur(0)' }}
            reset
          >
            {springStyle => (
              <animated.div style={springStyle}>
                <PrimaryImage
                  key={this.state.images[this.state.index]._id}
                  image={this.state.images[this.state.index]}
                />
              </animated.div>
            )}
          </Spring>
          <LeftArrow handleLeftClick={this.handleLeftClick.bind(this)} />
          <RightArrow handleRightClick={this.handleRightClick.bind(this)} />
        </div>
        <div className={styles.preview}>
          {this.state.images.map((image, index) => (
            <ImageEntry
              key={image._id}
              image={image}
              index={index}
              primaryIndex={this.state.index}
              handlePreviewClick={this.handlePreviewClick.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ImagesList;
