import type { NextPage} from 'next';
import Link from 'next/link';
import styles from "../styles/Home.module.scss"
import StyledPage from './StyledPage';


const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <StyledPage />
            <h1>Hello there ! this is the MAIN page os CookBook</h1>
            <Link href={"/about"}>
                <i>About</i>
            </Link>
        </div>
    )
}

export default Home