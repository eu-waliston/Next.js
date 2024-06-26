import type { NextPage} from 'next';
import Link from 'next/link';
import styles from "../styles/Home.module.scss"


const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>Hello there ! this is the ABOUT page os CookBook</h1>
            <Link href={"/"}>
                <i className={styles.link}>Main</i>
            </Link>
        </div>
    )
}

export default About