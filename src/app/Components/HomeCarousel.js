'use client'

import Image from 'next/image';
import React from 'react'
import styles from '@/styles/Carousel.module.css'
import Link from 'next/link';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
})

const HomeCarousel = () => {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '',
            '',
        ],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <div className={styles.mDiv}>
            <OwlCarousel loop margin={10} nav {...options}>
                <div>
                    <h4>Hello this is 1</h4>
                    <Image src={'/c1.jpg'} height={500} width={500} alt='image1'/>
                </div>
                <div>
                    <h4>This is 2</h4>
                </div>
                <div>
                    <h4>This is 3</h4>
                </div>
                <div>
                    <h4>This is 4</h4>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default HomeCarousel