import styles from '../styles/main.module.css'
import Image from 'next/image'
import Head from 'next/head'



export default function Home() {
  return (
    
    <div className = {styles.splashScreenWrapper}>
      <Head>
        <title>Everybody</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

            <Image
                alt="background image"
                src="/imgs/background.svg"
                layout = {'fill'}
                quality='100'
                objectFit={'cover'}
            />
            <div className={styles.imageWrapper}> 
              <Image
                  alt="background image"
                  src="/imgs/font.png"
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
