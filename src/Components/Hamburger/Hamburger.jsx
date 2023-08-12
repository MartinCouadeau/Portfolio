import React from 'react';
import styles from './Hamburger.module.css'; // Importa los estilos CSS en módulos

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <button className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={onClick}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
};

export default Hamburger;