import React from "react"
import { Link } from "react-router-dom"
import styles from "./Home.module.css"

export default function Home () {
    return (
        <div className={styles.mainDiv}>
            <h1>I'm</h1>
            <h1>Martin Couadeau.</h1>
            <p>FULL STACK DEVELOPER AND BACK-END SPECIALIST</p>
        </div>
    )
}