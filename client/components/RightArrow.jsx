import React from 'react';
import styles from '../styles/RightArrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const RightArrow = props => (
  <div onClick={props.handleRightClick} className={styles.container}>
    <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
  </div>
);

export default RightArrow;
