import React from "react"
import { Link } from "react-router-dom"
import styles from "./Detail.module.css"

export default function Detail () {
    return (
        <div className={styles.mainDiv}>
            <h1>Project title</h1>
            <h1>Photo</h1>
            <p>Description</p>
        </div>
    )
}