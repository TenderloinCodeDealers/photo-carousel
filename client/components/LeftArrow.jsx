import React from 'react';
import styles from '../styles/LeftArrow.css';

const LeftArrow = props => (
  <div onClick={props.handleLeftClick} className={styles.container}>
    <i className="fas fa-chevron-circle-left fa-2x" />
  </div>
);

export default LeftArrow;
