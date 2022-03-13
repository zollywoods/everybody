import styles from '../styles/main.module.css'
import Image from 'next/image'
import Head from 'next/head'



export default function Home() {
  return (
    
    <div className = {styles.splashScreenWrapper}>
      <Head>
        <title>Everybodys</title>
        <meta  content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Everybodys" key="title" />
      </Head>
            <div className={styles.backgroundWrapper}>  
              {/* <Image
                  alt="background image"
                  src="/imgs/background.svg"
                  layout = {'fill'}
                  quality='100'
                  objectFit={'cover'}
              /> */}
            </div>
            <div className={styles.imageWrapper}> 
              <Image
                  alt="background image"
                  src="/imgs/fontRGB.svg"
                  layout = {'responsive'}
                  quality='100'
                  width={1920}
                  height={1080}
              />
            </div>
            {/* <div className={styles.logos}> 
              <div className={styles.imageRow}>
                <img alt="discord logo" src="/imgs/icons8-discord-80.png"  className={styles.discordLogo} /> 
              </div>
            </div> */}
    </div>
  )
}
