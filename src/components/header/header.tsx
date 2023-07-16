import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <a href="https://github.com/FuryForev3r">FuryForever</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
