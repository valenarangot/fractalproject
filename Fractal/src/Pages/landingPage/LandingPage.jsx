import React from "react";
import { ButtonFirst, ContactSection, Header } from "../../components";
import styles from './LandingPage.module.css'

export function LandingPage () {
    return(
        <>
            <Header />
            <div className={styles.section1}>
                <div className={styles.contentSection1Left}>
                    <h1>Welcome!</h1>
                    <p>
                    Get ready to captivate your customers! Turn your concepts into stunning interfaces with our team of UX/UI and frontend experts. Let's talk now to bring your brand to the top!
                    </p> 
                    <ButtonFirst title="See more" />
                </div>
                <div className={styles.contentSection1Right}>
                    <img src="./assets/background-img/rectangle1.png" />
                </div>
              
                <img />
            </div>
        </>
    )
}