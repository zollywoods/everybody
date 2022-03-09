import styles from '../styles/main.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className = {styles.splashScreenWrapper}>
            <Image
                alt="background image"
                src="/imgs/background.jpg"
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
            <div className={styles.logos}> 
              <div className={styles.imageRow}>
                <img alt="discord logo" src="/imgs/icons8-discord-80.png"  className={styles.discordLogo} /> 
                {/* <img alt="twitter logo" src="/imgs/icons8-twitter-80.png"   className={styles.twitterLogo} />  */}
              </div>
            </div>
    </div>
  )
}
