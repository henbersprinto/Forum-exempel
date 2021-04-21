import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const url = "https://forum-api-jkrop.ondigitalocean.app/category/607fc753282ecd001e7dd1f1/thread";

    useEffect(() => {
        fetch(url).then(res => res.json().then(data => {setPosts(data); console.log("data: ", data)}))
    }, [url])

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {posts.map(post => (
                <article className="post-excerpt">
                    <h3>{post.title}</h3>
                    <p className="post-content">{post.content}</p>
                </article>
    ))}
        </section>
    )
}

export default PostsList