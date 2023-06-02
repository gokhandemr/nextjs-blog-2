'use client'
import Article from "@/components/article/Article"
import { useState } from "react";
import styles from './styles.module.css'

export default function PostCategory({ posts }) {

    let [post] = useState(posts)
    let [newPost, setNewPost] = useState([])
    const categoryNames = ['all', 'history', 'magical', 'mystery', 'classic', 'american', 'french', 'fiction', 'love', 'english']

    async function postFiltered(cat, event) {
        let target = event.target;
        let btns = document.querySelectorAll('#categoryList li a')
        let btnsSpan = document.querySelectorAll('#categoryList li a span')
        for (let i = 0; i < categoryNames.length; i++) {
            btns[i].style.color = '#999';
            btnsSpan[i].style.display = 'none'
        }
        target.style.color = '#fff';
        target.querySelector('span').style.display = 'block';
        setNewPost([])
        await cat === 'all' && setNewPost(post)
        await post.map(item => (
            item.tags.filter(tags => tags === cat &&
                setNewPost((prevState) => [...prevState, item])
            ))
        )
    }

    return (
        <>
            <ul className={styles.categoryList} id='categoryList'>
                {categoryNames &&
                    categoryNames.map((item, index) => (
                        <li key={index}>
                            <a href='#posts' onClick={() => (postFiltered(item, event))}>{item}
                                <span>({newPost.length <= 0 ? post.length : newPost.length})</span>
                            </a>
                        </li>
                    ))}
            </ul>
            <div className="home-page-main">
                <Article posts={newPost.length <= 0 ? post : newPost} />
            </div>
        </>
    )
}