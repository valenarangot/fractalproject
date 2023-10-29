import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
    
    return <footer className={styles.footer}>
        <div className={styles.footerTop}>
            <img src="src\Assets\icons\FractalLogo.svg" alt="login" />
            <ul className={styles.list}>
                <li><a href="#"><p>Content</p></a></li>
                <li><a href="#"><p>Information</p></a></li>
                <li><a href="#"><p>Legal</p></a></li>
                <li><a href="#"><p>Help</p></a></li>
            </ul>
        </div>
        <hr className={styles.divider}/>
        <div className={styles.footerBottom}>
            <p>FractalSupport@official.com</p>
            <p>Copyright ©  2010-2021 Fractal Team. All rights reserved.</p>
            <ul className={styles.list}>
                <li>
                    <a href="#"><img src="src\Assets\icons\IconYoutube.svg" alt="youtube" /></a>
                </li>
                <li>
                    <a href="#"><img src="src\Assets\icons\IconFacebook.svg" alt="facebook" /></a>
                </li>
                <li>
                    <a href="#"><img src="src\Assets\icons\IconTwitter.svg" alt="twitter" /></a>
                </li>
                <li>
                    <a href="#"><img src="src\Assets\icons\IconInstagram.svg" alt="instagram" /></a>
                </li>
                <li>
                    <a href="#"><img src="src\Assets\icons\IconLinkedin.svg" alt="linkedin" /></a>
                </li>
            </ul>
        </div>
    </footer>
}

export default Footer