import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import Hamburger from "../Hamburger/Hamburger"
import Menu from "../Menu/Menu"
import styles from "./Home.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className={styles.mainDiv}>
            <div className={styles.menuContainer}>
                <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
                {isMenuOpen && <Menu />} {/* Renderiza el menú solo si está abierto */}
            </div>
            <div className={styles.title}>
                <h1>I'm</h1>
                <h1>Martin Couadeau.</h1>
                <p>FULL STACK DEVELOPER AND BACK-END SPECIALIST</p>
            </div>
            <div>
                <br/>
                <ol className={styles.iconList}>
                    <li><i className={`fab fa-js ${styles.icon} ${styles.js}`}></i></li>
                    <li><i className={`fab fa-node ${styles.icon} ${styles.node}`}></i></li>
                    <li><i className={`fab fa-react ${styles.icon} ${styles.react}`}></i></li>
                    <li><i className={`fab fa-html5 ${styles.icon} ${styles.html}`}></i></li>
                    <li><i className={`fab fa-css3-alt ${styles.icon} ${styles.css}`}></i></li>
                    <li><i className={`fas fa-database ${styles.icon} ${styles.postgresql}`}></i></li>
                    <li><i className={`fab fa-python ${styles.icon} ${styles.python}`}></i></li>
                    {/*<li><i className={`fab fa-cuttlefish ${styles.icon} ${styles.cuttlefish}`}></i></li>*/}
                </ol>
            </div>
            <div>
                <p className={styles.description}>
                    While I'm new to the scene, my passion lies in crafting the gears behind the scenes. I'm driven by the puzzle of backend development, making sure every piece fits seamlessly to power the user experience. 
                    My focus may lean towards the backend but i'm also drawn to the artistry of the front end and i appreciate the harmony between form and function. I'm eager to dive into the dynamic world of web development, contributing my skills and enthusiasm to create intuitive and efficient digital solutions.
                    As I continue my journey, I'm excited to learn and evolve alongside the ever-changing technology landscape
                </p>
            </div>
            <div>
                <Link to="/projects">
                    <button className={styles.button}>Projects</button>
                </Link>
            </div>
        </div>
    )
}