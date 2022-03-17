import styles from '../styles/main.module.css'
import Image from 'next/image'
import Head from 'next/head'
import {useState} from 'react'



export default function Home() {

  const[dropDownVisibility, setDropDownVisibility] = useState(styles.dropDownMenuHidden);
  const[wrapperOverflow, setWrapperOverflow] = useState(styles.regularWrapper);

  const changeVisibility = () => {
    if(dropDownVisibility == styles.dropDownMenu){
      setDropDownVisibility(styles.dropDownMenuHidden)
      setWrapperOverflow(styles.regularWrapper)
    }
    else{
      setDropDownVisibility(styles.dropDownMenu)
      setWrapperOverflow(styles.dropDownWrapper)
    }
  } 

  return (
    <> 
      <Head>
        <title>Everybodys</title>
        <meta  content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Everybodys" key="title" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500&family=Nunito:wght@200;300&display=swap" rel="stylesheet" />

      </Head>
      <div className={wrapperOverflow}> 
      <div className={styles.navMenu}>
        <a href="" className={styles.navLink}> <b> ABOUT </b> </a>
        <a href="" className={styles.navLink}> <b> EVERYMAP </b>  </a>
        <a href="" className={styles.navLink}> <b> FAQ </b>  </a>
        <a href="" className={styles.navLink}> <b> TEAM </b>  </a>
        {/* <div className={styles.navLinkSocials}> 
          <a href="" > <img src="/imgs/icons8-twitter-80.png" height="45px" />  </a>
          <a href="" > <img src="/imgs/icons8-discord-80.png" height="45px" />  </a>
        </div> */}

      </div>
      <div className={styles.navMenuMobile}>
        <a href="" className={styles.menuLogo}> <img src="/imgs/boy_icon.svg" height="50px" /> </a>
        <div onClick={ () => changeVisibility() } className={styles.menuBar}> <img src="/imgs/menu_icon.png" height="40px" /> </div>
      </div>
      <div className={dropDownVisibility} >
        <ul className={styles.dropDownMenuItems}>
          <li className={styles.dropDownMenuTopItem}> ABOUT </li>
          <li className={styles.dropDownMenuItem}> EVERYMAP </li>
          <li className={styles.dropDownMenuItem}> FAQ </li>
          <li className={styles.dropDownMenuItem}> TEAM </li>
        </ul>
      </div>
      
      <div className={styles.splashWrapper}>
        <div className={styles.logoImage}>
          <Image 
          alt="logo image"
          src="/imgs/everybodys_font.svg"
          layout = {'responsive'}
          quality = '100'
          width = {1920}
          height = {600}
          />
        </div>
        {/* <div className={styles.mintButton}>
         <b> MINT </b> 
        </div> */}
      </div>

      <div className={styles.aboutSection}>
      {/* <div className={styles.pinImage}>
          <Image 
          alt="logo image"
          src="/imgs/pin.png"
          layout = {'responsive'}
          quality = '100'
          width = {1920}
          height = {1080}
          />
        </div> */}

        <div className={styles.sectionHeader}>
          <h1> ABOUT </h1>
        </div>
        <div className={styles.aboutContent}>
          <p> Sed elementum, arcu vel auctor auctor, eros dolor viverra tortor, ac 
            tempus nisi nulla ut metus. Donec a efficitur est. Nam consequat pretium dui,
             id rutrum tortor eleifend iaculis. Vivamus lobortis luctus enim ut pulvinar. 
             Maecenas non egestas ligula. Maecenas non leo non lectus hendrerit rhoncus.
            Mauris porttitor nulla condimentum, viverra 
        </p>
        </div>
        <div className={styles.aboutGifs}>
          <div className={styles.aboutGif}> 
            <img  src='/gifs/WAVE_v01.gif' style={{width: '100%'}}/>
          </div>
          <div className={styles.aboutGif}> 
            <img  src='/gifs/WAVE_v02.gif' style={{width: '100%'}} />
          </div>
          <div className={styles.aboutGifLast}> 
            <img  src='/gifs/WAVE_v03.gif' style={{width: '100%'}}/>
          </div>
        </div>  
      </div>


        <div className={styles.everyMapSection}>
          <div className={styles.everyMapBuffer}>

          </div>
          <div className={styles.everymapHeader}>
          <h1> EVERYMAP </h1> 
          </div>
          <div className={styles.everymapContent}>
            <p> Sed elementum, arcu vel auctor auctor, eros dolor viverra tortor, ac 
              tempus nisi nulla ut metus. Donec a efficitur est. Nam consequat pretium dui,
              id rutrum tortor eleifend iaculis. Vivamus lobortis luctus enim ut pulvinar. 
              Maecenas non egestas ligula. Maecenas non leo non lectus hendrerit rhoncus.
              Mauris porttitor nulla condimentum, viverra ante eget, dictum lectus. Class aptent 
          </p> <br/> 
          <p> Sed elementum, arcu vel auctor auctor, eros dolor viverra tortor, ac 
              tempus nisi nulla ut metus. Donec a efficitur est. Nam consequat pretium dui,
              id rutrum tortor eleifend iaculis. Vivamus lobortis luctus enim ut pulvinar. 
              Maecenas non egestas ligula. Maecenas non leo non lectus hendrerit rhoncus.
              Mauris porttitor nulla condimentum, viverra ante eget, dictum lectus. Class aptent 
          </p>

          </div>
        </div>

        <div className={styles.faqSection}>
          <div className={styles.moonImage}>
            <img src="/imgs/moon.png" width="100%"/>
          </div>
          <div className={styles.sectionHeader}>
          <h1> FAQ </h1> 
          </div>
          <div className={styles.questions}> 
            <div className={styles.question}>
              What is the supply?
            </div>
            <div className={styles.question}>
            When did we launch?
            </div>
            <div className={styles.question}>
            What is the utility?
            </div>
            <div className={styles.question}>
            What are NFTs?
            </div>

          </div>

        </div>

        <div className={styles.teamSection}>
        <div className={styles.sectionHeader}>
          <h1> TEAM </h1> 
          </div>


          <div className={styles.teamMembers}>
            <div className={styles.teamMember}>
              <div className={styles.teamPhoto}>
              <img src="/imgs/moon.png" className={styles.teamPhotoTag} />
              </div>
              <div className={styles.teamName}> David</div>
              <p className={styles.teamContent}> Founder and Project Manager </p>
            </div>
            <div className={styles.teamMember}>
            <div className={styles.teamPhoto}>
              <img src="/imgs/moon.png" className={styles.teamPhotoTag} />
              </div>
              <div className={styles.teamName}> Sean </div>
              <p className={styles.teamContent}> Artist </p>
            </div>
            <div className={styles.teamMember}>
            <div className={styles.teamPhoto}>
              <img src="/imgs/moon.png" className={styles.teamPhotoTag} />
              </div>
              <div className={styles.teamName}> Ryan </div>
              <p className={styles.teamContent}> Marketing </p>
            </div>
            <div className={styles.teamMember}>
            <div className={styles.teamPhoto}>
              <img src="/imgs/moon.png" className={styles.teamPhotoTag} />
              </div>
              <div className={styles.teamName}> Zolly</div>
              <p className={styles.teamContent}> Developement </p>

            </div>
          </div>
        </div>

        {/* <div className={styles.footer}>
          
        </div> */}
      </div>
    </>

  )
}
