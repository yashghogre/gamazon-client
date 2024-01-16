import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.logoDiv}>
            <Image src={'/logo.png'} height={100} width={100} alt='logo' className={styles.logo} />
        </div>
        <div className={styles.searchDiv}>
            <form className={styles.form}>
                <input placeholder='Search for your game...' className={styles.input} />
                {/* <input type='submit' name='search' className={styles.searchBtn} /> */}
                <button type='submit' name='search' classname={styles.searchBtn}><FaSearch /></button>
                {/* <button type='submit' name='search' classname={styles.searchBtn}>Search</button> */}
            </form>
        </div>
        <div className={styles.menuDiv}>
            <p>Genre</p>
            <p>Login</p>
            <p>SignUp</p>
        </div>
    </div>
  )
}

export default Navbar