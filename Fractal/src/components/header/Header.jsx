import React from "react"
import styles from "./Header.module.css"
import { ButtonSecond } from "../buttons/button-second/ButtonSecond"

export function Header (){
    return (
        <nav className={styles.nav}>
            <img src='../assets/icons/FractalAzul.svg' alt="logo" />

    
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
            
            <ButtonSecond title='ADMINISTRATOR MODE' className={styles.button} />
        </nav>
    )
}