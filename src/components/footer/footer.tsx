import styles from './footer.module.css'
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className={styles.footer} id='contact'>
      <div className={styles.footerItems}>
        <a href="https://github.com/FuryForev3r">
          <AiFillGithub size={42} className={styles.githubIcon} />
        </a>
        <a href="https://github.com/FuryForev3r">
          <AiFillTwitterCircle size={42} className={styles.twitterIcon} />
        </a>
      </div>
    </footer>
  )
}
