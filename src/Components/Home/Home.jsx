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
                    Since October 2023, I’ve specialized in architecting robust backend pipelines for LoRaWAN devices writing custom ThingsBoard payload decoders, designing rulechains 
                    that automate alarms and data flows, and ensuring reliable uplink/downlink processing. I’m most at home building and optimizing server-side systems—modeling and 
                    transforming raw sensor streams into actionable events yet equally comfortable stepping into full-stack work with JavaScript, Node.js and React to surface 
                    real-time insights. My platform-centric background has honed my ability to solve complex problems under tight constraints, and now I’m eager to apply that 
                    expertise to end-to-end solutions: from infrastructure and APIs to dashboards and deployments. Agile collaboration, continuous learning, and a passion for 
                    turning connected devices into scalable software are at the heart of my approach.
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