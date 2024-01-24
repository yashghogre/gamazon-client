import React from 'react'
import styles from '@/styles/Signup.module.css'

const page = () => {
    return (
        <div>
            <div className={styles.mDiv}>
                <h3 className={styles.title}>Sign-up</h3>
                <form className={styles.form}>
                    <div className={styles.inDiv}>
                        <label className={styles.label}>Username</label>
                        <input type='text' name='username' className={styles.input} />
                    </div>
                    <div className={styles.inDiv}>
                        <label className={styles.label}>phone</label>
                        <input type='text' name='phone' className={styles.input} />
                    </div>
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
                </form>
            </div>
        </div>
    )
}

export default page