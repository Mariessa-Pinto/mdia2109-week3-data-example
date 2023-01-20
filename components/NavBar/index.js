import styles from '@/styles/NavBar.module.css'
import Link from 'next/link'

export default function NavBar({
    
}) {
    return (
        <div className={styles.navBar}>
            <img src={"logo/logo.svg"} width="50"></img>
            <div className={styles.links}>
                <p>
                    <Link className={styles.words} href="/">Home</Link>
                </p>
                <p>
                    <Link className={styles.words} href="about">About</Link>
                </p>
            </div>
        </div>
    )
}