import styles from './page.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { AiFillGithub, AiFillTwitterCircle, AiFillAndroid } from 'react-icons/ai'
import { TbBrandNextjs, TbBrandPython, TbBrandTypescript, TbBrandFirebase } from 'react-icons/tb'
import { SiFastapi, SiExpress } from 'react-icons/si'
import { FaJava, FaVuejs } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <section className={styles.presentation} id="about">
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
        <section className={styles.skillsContainer} id="skills">
          <h3>Skills</h3>
          <ul className={styles.skills}>
            <li className={styles.skill}>
              <a href="https://nextjs.org/">
                <TbBrandNextjs size={60}/>
                <p>NextJS</p>
              </a>
            </li>
            <li className={styles.skill}>
              <a href="https://www.python.org/">
                <TbBrandPython size={60}/>
                <p>Python</p>
              </a>
            </li>
            <li className={styles.skill}>
              <a href="https://fastapi.tiangolo.com/">
                <SiFastapi size={60}/>
                <p>FastAPI</p>
              </a>
            </li>
            <li className={styles.skill}>
              <a href="https://www.typescriptlang.org/">
                <TbBrandTypescript size={60}/>
                <p>Typescript</p>
              </a>
            </li>
            <li className={styles.skill}>
              <a href="https://firebase.google.com/">
                <TbBrandFirebase size={60}/>
                <p>Firebase</p>
              </a>
            </li>
            <li className={styles.skill}>
              <a href="https://www.java.com/">
                <FaJava size={60}/>
                <p>Java</p>
              </a>
            </li>
            <li className={styles.skill}>
              <a href="https://expressjs.com/">
                <SiExpress size={60}/>
                <p>ExpressJS</p>
              </a>
            </li>
            <li className={styles.skill}>
              <a href="https://developer.android.com/studio">
                <AiFillAndroid size={60}/>
                <p>Android Studio</p>
              </a>
            </li>
            <li className={styles.skill}>
              <a href="https://developer.android.com/studio">
                <FaVuejs size={60}/>
                <p>VueJS</p>
              </a>
            </li>
          </ul>
        </section>
      </main>
      {/*<Footer/>*/}
    </>
  )
}
