import Link from "next/link";
import { AiFillHome } from 'react-icons/Ai';
import SearchBar from "./search-bar/page";

export default function Header() {
    return (
        <header>
            <div id='logo' className='logo'><Link href={'/'}><h1><strong>Blog</strong>theme</h1></Link></div>
            <nav>
                <Link href={'/'}><AiFillHome /> Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>
                <SearchBar />
            </nav>
        </header>
    )
}
