'use client'

import React, { useState } from 'react'
import styles from '@/styles/Signup.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import toast, { Toaster } from 'react-hot-toast'

const page = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const router = useRouter()

    const userData = (e) => {
        const { name, value } = e.target

        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    console.log(user)

    const sendData = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:8080/api/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })

        
        // setUser({
        //     email: '',
        //     password: ''
        // }
        // )
        
        if (res.status === 200) {
            // toast.success('User Logged in Successfully!')
            localStorage.setItem('email', user.email)
            router.push('/')
            const resData = res.json()
            // console.log(resData[2].token)
        }
    }

    return (
        <div>
            <div className={styles.mDiv}>
                {/* <Toaster /> */}
                {/* <h3 className={styles.loginTitle}>Login</h3> */}
                <form className={styles.form}>
                    <fieldset className={styles.fs}>
                        <legend className={styles.lg}><h2>Login</h2></legend>
                        <div className={styles.inDiv}>
                            <label className={styles.label}>email</label>
                            <input type='email' name='email' className={styles.input} onChange={userData} />
                        </div>
                        <div className={styles.inDiv}>
                            <label className={styles.label}>password</label>
                            <input type='password' name='password' className={styles.input} onChange={userData} />
                        </div>
                        <div className={styles.btnDiv}>
                            <button className={styles.btn} onClick={sendData}>Login</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href='/signup' style={{ textDecoration: 'none' }}><p style={{ color: '#4169E1', outline: '1px' }}>New User?</p></Link>
                        </div>
                    </fieldset>
                </form>
            </div >
            {/* <Toaster /> */}
        </div >
    )
}

export default page