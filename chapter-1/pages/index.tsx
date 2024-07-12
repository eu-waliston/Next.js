import type { NextPage } from "next";
import Link from "next/link";
import "../styles/Home.module.scss";


const Home: NextPage = () => {
    return (
        <div className='home--container'>
            <h1>
                Hello there ! This is the main page of CookBook
            </h1>

            <Link href={"/about"} className="link">
                About
            </Link>
        </div>
    )
}

export default Home;

