import styles from './styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <a href="https://github.com/FuryForev3r">FuryForever</a>
      </h1>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </header>
  )
}
