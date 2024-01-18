import Image from 'next/image'
import styles from './page.module.css'
import SOTCard from './Components/SOTCard'
import HomeCarousel from './Components/HomeCarousel'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <HomeCarousel />
      </div>
      <div className={styles.spOfferDiv}>
        <div className={styles.spOfferTitleDiv}>
          <h3>Special Offers</h3>
        </div>
        <div className={styles.SOTCDiv}>
          <SOTCard link='/' img='/img1.jpg' title='MidWeek Deal' tagline='Offer ends 18 Jan @ 11:30pm.' offer='Up to -67% ' />
          <SOTCard link='/' img='/img2.jpg' title='MidWeek Deal' tagline='Offer ends 22 Jan @ 11:30pm.' offer='Up to -40% ' />
          <SOTCard link='/' img='/img3.jpg' title='MidWeek Deal' tagline='Offer ends 18 Jan @ 11:30pm.' offer='Up to -90% ' />
          <SOTCard link='/' img='/img4.png' title='MidWeek Deal' tagline='Offer ends 18 Jan @ 11:30pm.' offer='Up to -25% ' />
        </div>
      </div>
    </main>
  )
}
