'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import styles from '@/styles/GamePage.module.css'

const gameID = ({ params }) => {

    const gID = params.gameID;
    const [rd, setRD] = useState([])

    console.log(gID)

    useEffect(() => {
        async function fetchGame() {
            const response = await fetch('http://localhost:8080/api/game/checkGame', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gameID: gID })
            });
            // console.log(response)
            const resData = await response.json();
            // console.log(resData);
            // setRD((prev) => [...prev, resData])
            setRD([resData])
            // setRD(resData)
        };

        fetchGame();
    }, [])

    console.log(rd)
    // console.log(rd.gameExist)

    return (
        <div style={{marginTop: '5vh'}}>
            {/* <h4>{rd.name}</h4>
            <p>{rd.description}</p> */}
            {rd.map((value, key) => {
                return (
                    <div>
                        <div className={styles.mainDiv}>
                            <div>
                                <Image src={'/k1.jpeg'} height={500} width={500} alt="game-image" className={styles.img} />
                            </div>
                            <div>
                                <div className={styles.nameDiv}>
                                    <h1>{value.name}</h1>
                                </div>
                                <div className={styles.infoDiv}>
                                    <div className={styles.sIDiv} style={{ width: '20vw' }}>
                                        <p className={styles.title}>Price</p>
                                        <p className={styles.title}>Uploader</p>
                                        <p className={styles.title}>Genre</p>
                                        <p className={styles.title}>Required RAM</p>
                                        <p className={styles.title}>Required GPU</p>
                                        <p className={styles.title}>description</p>
                                    </div>
                                    <div className={styles.sIDiv} style={{ width: '30vw' }}>
                                        <p>₹ {value.price}</p>
                                        <p>{value.uploader}</p>
                                        <p>{value.genre}</p>
                                        <p>{value.ram}</p>
                                        <p>{value.gpu}</p>
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                                {/* <p>{value.comments}</p> */}
                            </div>
                        </div>
                        <div className={styles.btnDiv}>
                            <Link href={`${value.link}`}>
                                <button className={styles.btn}>Download</button>
                            </Link>
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default gameID