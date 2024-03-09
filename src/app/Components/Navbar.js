'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import DropdownNav from './DropdownNav';
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(localStorage.getItem('email'))
        console.log(user)
    }, [])

    const [isVisible, setIsVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsVisible(true)
    }

    const handleMouseLeave = () => {
        setIsVisible(false)
    }

    // const isUserLogin = checkCookie
    // const userLogin = checkCookie
    // console.log(checkCookie)

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
                    </div>
                </div>
                {user ?
                    <Link href={'/account'} style={{textDecoration: 'none'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                            <VscAccount size={25} />
                            <p>My Account</p>
                        </div>
                    </Link> :
                    <div style={{ display: 'flex', gap: '5vw' }}>
                        <p><Link href={'/login'} style={{ textDecoration: 'none' }}>Login</Link></p>
                        <p><Link href={'/signup'} style={{ textDecoration: 'none' }}>SignUp</Link></p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar