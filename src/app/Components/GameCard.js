import Image from 'next/image'
import React from 'react'
import styles from '@/styles/GameCard.module.css'

const GameCard = (props) => {
    return (
        <div className={styles.mDiv}>
            <div className={styles.imgDiv}>
                <Image src={props.img} height={200} width={300} alt='game-card-img' className={styles.img} />
            </div>
            <div className={styles.detailsDiv}>
                <div className={styles.nameDiv}>
                    <p className={styles.name}>{props.name}</p>
                </div>
                <div className={styles.lineDiv}>
                    <p className={styles.line}>{props.offerTill}</p>
                </div>
                <div className={styles.priceDiv}>
                    <h4 className={styles.offer}>{props.offer}</h4>
                    <h4 className={styles.price}>₹ {props.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default GameCard