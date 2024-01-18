'use client'

import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '@/styles/Carousel.module.css'
import Link from 'next/link';

const HomeCarousel = () => {

    return (
        <div className={styles.mDiv}>
            <div>
                <Link href={'/Hello'}>
                    <Image className={styles.image} src={'/c1.jpg'} height={500} width={500} alt='carousel-image' />
                </Link>
            </div>
            <div>
                <Link href={'/Hello'}>
                    <Image className={styles.image} src={'/c1.jpg'} height={500} width={500} alt='carousel-image' />
                </Link>
            </div>
        </div>
    )
}

export default HomeCarousel