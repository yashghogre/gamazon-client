import React from 'react'
import styles from '@/styles/Dropdown.module.css'
import Link from 'next/link'

const DropdownNav = () => {
  return (
    <div className={styles.dDDiv} style={{ position: 'absolute', transition: 'all 1s' }}>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1vh' }}>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Action</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Adventure</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Role-Playing Game</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Simulation</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Strategy</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Sports</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Racing</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Fighting</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Horror</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Survival</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Puzzle</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>MOBA</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>First-Person Shooter</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Third-Person Shooter</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Educational</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Music</li>
        </Link>
        <Link href={'/'} className = {styles.liLink}>
          <li className={styles.listItem}>Adult</li>
        </Link>
      </ul>
    </div>
  )
}

export default DropdownNav