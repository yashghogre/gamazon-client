import Image from 'next/image'
import styles from './page.module.css'
import SOTCard from './Components/SOTCard'
import HomeCarousel from './Components/HomeCarousel'
import GameCard from './Components/GameCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <HomeCarousel />
      </div> */}
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
      <div>
        <div className={styles.DAGTitleDiv}>
          <h3>Discover <span style={{ backgroundColor: 'red', paddingLeft: '2px', paddingRight: '2px', borderRadius: '2px' }}>Action</span> Games</h3>
        </div>
        <div className={styles.DAGCards}>
          <Link href={'http://localhost:3000/game/65ce434450623f8deb4dabec'} style={{ textDecoration: 'none' }}>
            <GameCard img='/cs2.jpg' name='Counter Strike 2' offerTill='Offer ends on 31st' offer='-69%' price='555' />
          </Link>
          <Link href={'http://localhost:3000/game/65ce434450623f8deb4dabec'} style={{ textDecoration: 'none' }}>
            <GameCard img='/cs2.jpg' name='Counter Strike 2' offerTill='Offer ends on 31st' offer='-69%' price='555' />
          </Link>
          <Link href={'http://localhost:3000/game/65ce434450623f8deb4dabec'} style={{ textDecoration: 'none' }}>
            <GameCard img='/cs2.jpg' name='Counter Strike 2' offerTill='Offer ends on 31st' offer='-69%' price='555' />
          </Link>
          <Link href={'http://localhost:3000/game/65ce434450623f8deb4dabec'} style={{ textDecoration: 'none' }}>
            <GameCard img='/cs2.jpg' name='Counter Strike 2' offerTill='Offer ends on 31st' offer='-69%' price='555' />
          </Link>
        </div>
      </div>
    </main>
  )
}
