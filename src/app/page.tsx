import styles from './page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <section className={styles.presentation}>
          <div className={styles.myInfo}>
            <h2>I'm <span><a href='https://github.com/FuryForev3r'>FuryForever!</a></span></h2>
            <p>Hi! My internet alias is FuryForever, but my real name is Messias. <br/> I am a Brazilian student and a Full Stack developer.</p>
            <div className={styles.socialLinks}>
              <ul>
                <li>
                  <a href="https://github.com/furyforev3r">
                    <AiFillGithub size={42} className={styles.githubIcon} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/furyforev3r">
                    <AiFillTwitterCircle size={42} className={styles.twitterIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      {/*<Footer />*/}
      {/*Hidding Footer*/}
    </>
  )
}
