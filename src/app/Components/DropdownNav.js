import React from 'react'
import styles from '@/styles/Dropdown.module.css'

const DropdownNav = () => {
  return (
    <div className={styles.dDDiv} style={{position: 'absolute', transition: 'all 1s'}}>
        <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1vh'}}>
            <li className={styles.listItem}>Action</li>
            <li className={styles.listItem}>Adventure</li>
            <li className={styles.listItem}>Role-Playing Game</li>
            <li className={styles.listItem}>Simulation</li>
            <li className={styles.listItem}>Strategy</li>
            <li className={styles.listItem}>Sports</li>
            <li className={styles.listItem}>Racing</li>
            <li className={styles.listItem}>Fighting</li>
            <li className={styles.listItem}>Horror</li>
            <li className={styles.listItem}>Survival</li>
            <li className={styles.listItem}>Puzzle</li>
            <li className={styles.listItem}>MOBA</li>
            <li className={styles.listItem}>First-Person Shooter</li>
            <li className={styles.listItem}>Third-Person Shooter</li>
            <li className={styles.listItem}>Educational</li>
            <li className={styles.listItem}>Music</li>
            <li className={styles.listItem}>Adult</li>
        </ul>
    </div>
  )
}

export default DropdownNav