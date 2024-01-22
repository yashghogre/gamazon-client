'use client'

import React, { useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import DropdownNav from './DropdownNav';

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsVisible(true)
    }

    const handleMouseLeave = () => {
        setIsVisible(false)
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.logoDiv}>
                <Link href={'/'}>
                    <Image src={'/logo.png'} height={100} width={100} alt='logo' className={styles.logo} />
                </Link>
            </div>
            <div className={styles.searchDiv}>
                <form className={styles.form}>
                    <input placeholder='Search for your game...' className={styles.input} />
                    {/* <input type='submit' name='search' className={styles.searchBtn} /> */}
                    <button type='submit' name='search' className={styles.searchBtn}><FaSearch /></button>
                    {/* <button type='submit' name='search' classname={styles.searchBtn}>Search</button> */}
                </form>
            </div>
            <div className={styles.menuDiv}>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.genreDiv}>
                    <p style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} >Genre<RiArrowDropDownLine />
                    </p>
                    <div>
                        {isVisible && <DropdownNav />}
                        {/* <DropdownNav /> */}
                    </div>
                </div>
                <p>Login</p>
                <p>SignUp</p>
            </div>
        </div>
    )
}

export default Navbar