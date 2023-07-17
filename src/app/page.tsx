import styles from './page.module.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'

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
        <section className={styles.section}>
          <h3 className={styles.sectionTitle} id="skills"><a href="https://github.com/Furyforev3r#%EF%B8%8F-skills">My skills</a></h3>
          <ul className={styles.skillsContainer}>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Back-end</p>
              <div>
                <p className={styles.skills}>JS/Node, TypeScript, Python, PHP, Java, C#, ExpressJS, FastAPI, NextJS.</p>
                <img src="https://skillicons.dev/icons?i=js,nodejs,typescript,python,php,java,cs,expressjs,fastapi,nextjs" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Front-end</p>
              <div>
                <p className={styles.skills}>HTML/CSS, ReactJS, NextJS, VueJS, NuxtJS, TypeScript, Tailwind CSS, Vite, Styled Components, Sass/Scss, jQuery.</p>
                <img src="https://skillicons.dev/icons?i=html,css,react,nextjs,vuejs,nuxtjs,typescript,tailwind,vite,styledcomponents,sass,scss,jquery" alt="" />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>DataBases</p>
              <div>
                <p className={styles.skills}>Firebase, MongoDB, SQL/NoSQL.</p>
                <img src="https://skillicons.dev/icons?i=firebase,mongodb,mysql,postgresql,sqlite" alt="" />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Android</p>
              <div>
                <p className={styles.skills}>React Native, Kotlin/Java/Android Studio.</p>
                <img src="https://skillicons.dev/icons?i=react,kotlin,java,androidstudio" alt="" />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>GameDev</p>
              <div>
                <p className={styles.skills}>Construct 3, Unity2D/3D.</p>
                <img src="https://skillicons.dev/icons?i=unity" alt="Skills Image." />
              </div>
            </li>
            <li className={styles.skill}>
              <p className={styles.skillTitle}>Tools</p>
              <div>
                <p className={styles.skills}>Vercel, Git/GitHub/GitLab, Bash, Powershell, Visual Studio Code/Visual Studio, Discord, Gradle, (JetBrains) Idea, Linux, Markdown, Photoshop, Replit, SublimeText.</p>
                <img src="https://skillicons.dev/icons?i=vercel,git,github,gitlab,bash,powershell,vscode,visualstudio,discord,gradle,idea,linux,md,ps,replit" alt="Skills Image." />
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle} id="projects"><a href="https://github.com/Furyforev3r?tab=repositories">My Projects</a></h3>
          <ul className={styles.projectsContainer}>
            <li>
              <a href="https://mortis.vercel.app" className={styles.project}>
                <p className={styles.projectTitle}>Mortis.</p>
                <p className={styles.projectDesc}>A riddle inspired by Black Riddle...</p>
                <a href="https://github.com/FuryForev3r/mortis" className={styles.githubRepo}>
                  <AiFillGithub size={20} className={styles.githubIcon} /> Github repository!
                </a>
                <div>
                  <img className={styles.tecIcons} src="https://skillicons.dev/icons?i=nextjs,ts,vercel" alt="Tecs." />
                </div>
              </a>
            </li>
            <li>
              <a href="https://youtubeforever.vercel.app" className={styles.project}>
                <p className={styles.projectTitle}>Youtube-Forever.</p>
                <p className={styles.projectDesc}>An API that downloads audio and gets information from Youtube videos!</p>
                <a href="https://github.com/FuryForev3r/Youtube-Forever" className={styles.githubRepo}>
                  <AiFillGithub size={20} className={styles.githubIcon} /> Github repository!
                </a>
                <div>
                  <img className={styles.tecIcons} src="https://skillicons.dev/icons?i=express,ts,vercel" alt="Tecs." />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/wilburslyrics" className={styles.project}>
                <p className={styles.projectTitle}>Wilbur-Lyrics.</p>
                <p className={styles.projectDesc}>A twitter bot that posts about Wilbur Soot!</p>
                <a href="https://github.com/Furyforev3r/Wilbur-Lyrics-BOT" className={styles.githubRepo}>
                  <AiFillGithub size={20} className={styles.githubIcon} /> Github repository!
                </a>
                <div>
                  <img className={styles.tecIcons} src="https://skillicons.dev/icons?i=python,twitter" alt="Tecs." />
                </div>
              </a>
            </li>
            <li>
              <a href="https://dice-roller-api-express-js.vercel.app/" className={styles.project}>
                <p className={styles.projectTitle}>Dice-Roller-API</p>
                <p className={styles.projectDesc}>A dice rolling API done in Typescript using ExpressJS!</p>
                <a href="https://github.com/Furyforev3r/Dice-Roller-API-ExpressJS" className={styles.githubRepo}>
                  <AiFillGithub size={20} className={styles.githubIcon} /> Github repository!
                </a>
                <div>
                  <img className={styles.tecIcons} src="https://skillicons.dev/icons?i=express,ts,vercel" alt="Tecs." />
                </div>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  )
}
