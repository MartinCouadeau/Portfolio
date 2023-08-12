import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css"; // Importa los estilos CSS

const Menu = () => {
    return (
        <div className={styles.menu}>
          <br />
          <br />
            <div>
              <ul className={styles.menuList}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Me</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  {/* Agrega más elementos de menú según tus necesidades */}
              </ul>
            </div>
            
            <div>
              <ol className={styles.contactList}>
                  <li><a href="https://github.com/MartinCouadeau" className={`fab fa-github ${styles.contact} ${styles.github}`}></a></li>
                  <li><a href="https://www.linkedin.com/in/martin-couadeau/" className={`fab fa-linkedin ${styles.contact} ${styles.linkedin}`}></a></li>
                  <li><a href="mailto:martin_couadeau1@hotmail.com" className={`fas fa-envelope ${styles.contact} ${styles.email}`}></a></li>
              </ol>
            </div>
        </div>
    );
};

export default Menu;