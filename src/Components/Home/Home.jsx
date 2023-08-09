import React from "react"
import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home () {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.title}>
                <h1>I'm</h1>
                <h1>Martin Couadeau.</h1>
                <p>FULL STACK DEVELOPER AND BACK-END SPECIALIST</p>
            </div>
            <div>
            <ol className={styles.iconList}>
                <li><i className={`fab fa-js ${styles.icon} ${styles.js}`}></i></li>
                <li><i className={`fab fa-node ${styles.icon} ${styles.node}`}></i></li>
                <li><i className={`fab fa-react ${styles.icon} ${styles.react}`}></i></li>
                <li><i className={`fab fa-html5 ${styles.icon} ${styles.html}`}></i></li>
                <li><i className={`fab fa-css3-alt ${styles.icon} ${styles.css}`}></i></li>
                <li><i className={`fas fa-database ${styles.icon} ${styles.postgresql}`}></i></li>
                <li><i className={`fab fa-python ${styles.icon} ${styles.python}`}></i></li>
                <li><i className={`fab fa-cuttlefish ${styles.icon} ${styles.cuttlefish}`}></i></li>
            </ol>
            </div>
        </div>
    )
}