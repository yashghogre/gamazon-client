import React from 'react'
import styles from '@/styles/SOTCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SOTCard = (props) => {
    return (
        <div className={styles.mmDiv}>
            <Link href={props.link} style={{textDecoration: 'none'}}>
                <div className={styles.mainDiv}>
                    <div className={styles.imageDiv}>
                        <Image src={props.img} height={280} width={280} alt='banner1' />
                    </div>
                    <div className={styles.titleDiv}>
                        <p className={styles.title}>{props.title}</p>
                    </div>
                    <div className={styles.taglineDiv}>
                        <p className={styles.tagline}>{props.tagline}</p>
                    </div>
                    <div className={styles.offerDiv}>
                        <h2 className={styles.offer}>{props.offer}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SOTCard