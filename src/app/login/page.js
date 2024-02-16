import React from 'react'
import styles from '@/styles/Signup.module.css'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <div className={styles.mDiv}>
                {/* <h3 className={styles.loginTitle}>Login</h3> */}
                <form className={styles.form}>
                    <fieldset className={styles.fs}>
                        <legend className={styles.lg}><h2>Login</h2></legend>
                        <div className={styles.inDiv}>
                            <label className={styles.label}>email</label>
                            <input type='text' name='email' className={styles.input} />
                        </div>
                        <div className={styles.inDiv}>
                            <label className={styles.label}>password</label>
                            <input type='text' name='password' className={styles.input} />
                        </div>
                        <div className={styles.btnDiv}>
                            <button className={styles.btn}>Sign-Up</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href='/signup' style={{ textDecoration: 'none' }}><p style={{ color: '#4169E1', outline: '1px' }}>New User?</p></Link>
                        </div>
                    </fieldset>
                </form>
            </div >
        </div >
    )
}

export default page