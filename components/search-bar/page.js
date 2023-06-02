'use client'
import { useState } from 'react';
import styles from './styles.module.css'
import { FaSearch } from 'react-icons/fa';
import { searchPost } from '@/services/Fetch';
import Link from 'next/link';

export default function SearchBar() {
    let [post, setPost] = useState()

    async function searchFunc(event) {
        event.preventDefault()
        document.querySelector('#searchList').style.display = 'block'
        const regex = /[</>\\*'!$€£@½%{&}=|."`~¨´\-;\[\]\(\)_:^#+/?,é]/g
        let key = document.querySelector('#InputValue').value.trim().replaceAll(regex, '')
        if (key !== '') {
            let { posts } = await searchPost(key)
            setPost(posts)
        } else {
            alert('error')
        }
    }

    return (
        <form className={styles.topnav} onSubmit={() => (searchFunc(event))} onMouseLeave={() => (document.querySelector('#searchList').style.display = 'none')}>
            <input type="text" placeholder='Search...' id='InputValue' />
            <button type="submit"><FaSearch /></button>
            <ul className={styles.searchList} id='searchList'>
                {post &&
                    post.map(item => (
                        <li key={item.id}><Link href={`${item.id}`}>{item.title}</Link></li>
                    ))}
            </ul>
        </form>
    )
}