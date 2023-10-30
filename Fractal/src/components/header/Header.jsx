import React from "react"
import styles from "./Header.module.css"

const Header = ()  =>{
    return (
        <nav className={styles.nav}>
            <img src="src\Assets\icons\FractalAzul.svg" alt="logo" />

            <ul className={styles.list}>
                <li className={styles.item}>
                    <a href="#"><p className={styles.paragraph}>About us</p></a>
                </li>
                <li className={styles.item}>
                    <a href="#"><p className={styles.paragraph}>Services</p></a>
                </li>
                <li className={styles.item}>
                    <a href="#"><p className={styles.paragraph}>Portfolio</p></a>
                </li>
                <li className={styles.item}>
                    <a href="#"><p className={styles.paragraph}>Contact</p></a>
                </li>
            </ul>
            <button className={styles.button}>ADMINISTRATOR MODE</button>
        </nav>
    )
}

export default Header