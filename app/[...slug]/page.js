import { getPosts } from "@/services/Fetch";
import Image from "next/image";
import styles from './styles.module.css'
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    let { posts } = await getPosts()
    let post = posts && posts.find(item => item.id === Number(params.slug) && item)
    if (!post) {
        notFound();
    }
    return {
        title: post.title,
        description: post.body,
    };
}


export default async function page({ params }) {
    let { posts } = await getPosts()
    let post = posts && posts.find(item => item.id === Number(params.slug) && item)


    return (
        <main className={styles.main}>
            <h2 className={styles.postTitle}>
                {post.title}
            </h2>
            <div className={styles.imageConteiner}>
                <Image src={`https://picsum.photos/id/${post.id + 20}/500/350`}
                    priority
                    placeholder="blur"
                    blurDataURL={`https://picsum.photos/id/${post.id + 20}/500/350`}
                    alt={post.title}
                    width={500}
                    height={350}
                    style={{ objectFit: 'cover', borderRadius: '15px' }} />
                <div className={styles.tags}>tags: {post.tags.length > 1 ? post.tags.map(item => <span className={styles.tagsSpan}>{item}</span>) : post.tags}</div>
            </div>
            <p>
                {post.body}
            </p>
        </main>
    )
}
