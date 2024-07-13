import styles from './footer.module.css'
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className={styles.footer} id='contact'>
      <div className={styles.footerItems}>
        <a href="https://github.com/FuryForev3r" className={styles.contact}>
          <AiFillGithub size={42} className={styles.githubIcon} />Github!
        </a>
        <a href="https://github.com/FuryForev3r" className={styles.contact}>
          <AiFillTwitterCircle size={42} className={styles.twitterIcon} />Twitter!
        </a>
        <a href="mailto:furyforeverdev@gmail.com" className={styles.contact}>
          <FiMail size={32} /> furyforeverdev@gmail.com
        </a>
      </div>
    </footer>
  )
}
