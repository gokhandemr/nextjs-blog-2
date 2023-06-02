export const getPosts = async () => {
    let resp = await fetch(`https://dummyjson.com/posts?limit=150`)
    return resp.json()
}

export const searchPost = async (key) => {
    let resp = await fetch(`https://dummyjson.com/posts/search?q=${key}`)
    return resp.json()
}