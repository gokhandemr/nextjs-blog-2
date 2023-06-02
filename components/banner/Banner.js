import Link from 'next/link';
import styles from './styles.module.css'
import { AiOutlineInstagram, AiFillFacebook, AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai";

export default async function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <h2>Hi, my name is</h2>
                <h2>John Doe</h2>
            </div>
            <div className={styles.text}>
                <p>
                    Ut fugiat fugiat aute dolore commodo quis veniam ipsum.Duis incididunt est exercitation commodo mollit culpa ullamco aute.
                </p>
                <div className={styles.socials}>
                    <Link href={'#'}><AiFillGithub /></Link>
                    <Link href={'#'}><AiFillLinkedin /></Link>
                    <Link href={'#'}><AiFillFacebook /></Link>
                    <Link href={'#'}><AiOutlineInstagram /></Link>
                    <Link href={'#'}><AiFillTwitterSquare /></Link>
                </div>
            </div>

        </section>
    )
}
