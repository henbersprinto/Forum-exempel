import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddLike from './AddLike'

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const url = "https://forum-api-jkrop.ondigitalocean.app/category/608bfb0ae747d9001dee9744/thread";

    useEffect(() => {
        fetch(url).then(res => res.json().then(data => {setPosts(data); console.log("data: ", data)}))
    }, [url])

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {posts.map(post => (
                <div>
                    <article className="post-excerpt">
                        <h3>{post.title}</h3>
                        <p className="post-content">{post.content}</p>
                    </article>
                    <AddLike type="THREAD" id={post._id} numberOfLikes={post.likes.length}/>
                </div>
            ))}
        </section>
    )
}

export default PostsList