import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import styles from "./Projects.module.css"
import Hamburger from "../Hamburger/Hamburger"
import Menu from "../Menu/Menu"

export default function Projects () {

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
            <h1>all projects here</h1>
        </div>
        
    )
}