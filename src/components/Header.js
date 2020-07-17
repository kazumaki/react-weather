import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div>
      My Weather App
    </div>
    <i className="fas fa-cloud"></i>
  </header>
)

export default Header;