import React from 'react';
import styles from '../styles/RightArrow.css';

const RightArrow = props => (
  <div onClick={props.handleRightClick} className={styles.container}>
    <i className="fas fa-chevron-circle-right fa-3x" />
  </div>
);

export default RightArrow;
