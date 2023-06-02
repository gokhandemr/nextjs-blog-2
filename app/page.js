import { getPosts } from "@/services/Fetch"
import Banner from '@/components/banner/Banner'
import PostCategory from "@/components/post-category/page"

export default async function Home() {
  let { posts } = await getPosts()

  return (
    <>
      <Banner />
      <main>
        <h3 id='posts' className="title">BLOGS: </h3>
        <PostCategory posts={posts} />
      </main>
    </>

  )
}