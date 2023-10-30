import React from 'react'
import styles from "./LoginPage.module.css"
import LoginForm from '../../components/loginForm/LoginForm'

const LoginPage = () => {

    return <main className={styles.loginContainer}>
        <aside className={styles.image}>
            <img src="src\Assets\imgs\FondoLogin.png" alt="login" />
        </aside>
        <section className={styles.formSection}>
            <div className={styles.logo}>
                <img src="src\Assets\icons\FractalAzul.svg" alt="login" />
            </div>
            <div className={styles.text}>
                <h3>¡Hola de nuevo!</h3>
                <p>Para ingresar al modo desarrollador rellena la siguiente información.</p>
            </div>
            <LoginForm/>
        </section>
    </main>
}

export default LoginPage