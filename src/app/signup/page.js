'use client'

import React, { useState } from 'react'
import styles from '@/styles/Signup.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import toast, { Toaster } from 'react-hot-toast'

const page = () => {

    const [user, setUser] = useState({
        username: '',
        phone: '',
        email: '',
        password: ''
    })

    const router = useRouter()

    const userData = (e) => {
        const { value, name } = e.target

        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    // console.log(user)

    const sendData = async (e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:8080/api/auth/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const resData = res.json()
        console.log(res.status)

        if (res.status === 201) {
            // toast.success('User Successfully Registered!')
            router.push('/login')
        }
    }

    return (
        <div>
            {/* <Toaster /> */}
            <div className={styles.mDiv}>
                {/* <h3 className={styles.title}>Sign-up</h3> */}
                <form className={styles.form}>
                    <fieldset className={styles.fs}>
                        <legend className={styles.lg}><h2>Sign-Up</h2></legend>
                        <div className={styles.inDiv}>
                            <label className={styles.label}>Username</label>
                            <input type='text' name='username' className={styles.input} onChange={userData} />
                        </div>
                        <div className={styles.inDiv}>
                            <label className={styles.label}>phone</label>
                            <input type='number' name='phone' className={styles.input} onChange={userData} />
                        </div>
                        <div className={styles.inDiv}>
                            <label className={styles.label}>email</label>
                            <input type='email' name='email' className={styles.input} onChange={userData} />
                        </div>
                        <div className={styles.inDiv}>
                            <label className={styles.label}>password</label>
                            <input type='password' name='password' className={styles.input} onChange={userData} />
                        </div>
                        <div className={styles.btnDiv}>
                            <button className={styles.btn} onClick={sendData}>Sign-Up</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href='/login' style={{ textDecoration: 'none' }}><p style={{ color: '#4169E1' }}>Already a user?</p></Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default page