'use client'
import Image from "next/image"
import styles from './styles.module.css'
import Link from "next/link"
import { useState } from "react"

export default function Article({ posts }) {

    let [count, setCount] = useState(6)

    function showPosts() {
        setCount(count + 6)
    }

    return (
        <>
            {
                posts &&
                posts.slice(0, count).map(item => (
                    <article className={styles.post} key={item.id}>
                        <Link href={`${item.id}`} className={styles.postImage}>
                            <Image
                                placeholder="blur"
                                blurDataURL={`https://picsum.photos/id/${item.id + 20}/350/200`}
                                src={`https://picsum.photos/id/${item.id + 20}/350/200`}
                                alt={item.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </Link>
                        <div key={item.id} className={styles.postDetail}>
                            <h4>{item.title}</h4>
                            <span>{item.tags && item.tags.map(item => '#' + item + ' ')}</span>
                            <p>{item.body.slice(0, 100)}...</p>
                        </div>
                    </article>
                ))
            }
            {count >= posts.length && <p style={{ marginTop: '25px' }} className={styles.noPosts} >no other posts found, <a href='#logo' style={{ color: 'firebrick' }}>Go to top</a></p>}
            {count < posts.length && <button className={styles.showButton} onClick={showPosts}>show more</button>}
        </>
    )
}