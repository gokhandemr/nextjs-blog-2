'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'

export default function page() {
    let [name, setName] = useState('')
    let [mail, setMail] = useState('')
    let [message, setMessage] = useState('')

    return (
        <main className={styles.main}>
            <h2 className={styles.title}>Contact Me</h2>
            <form onSubmit={(e) => (e.preventDefault())} className={styles.form} >
                <input className={styles.name} value={name} onChange={(e) => (setName(e.target.value))} placeholder='name' type='text' />
                <input className={styles.mail} value={mail} onChange={(e) => (setMail(e.target.value))} placeholder='e-mail' type='mail' />
                <textarea className={styles.message} value={message} onChange={(e) => (setMessage(e.target.value))} placeholder='what is your message' />
                <button className={styles.button}>Submit</button>
            </form>
        </main>
    )
}