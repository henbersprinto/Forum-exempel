import React, { useState } from 'react'

const AddPostForm = () => {

    const url = "https://forum-api-jkrop.ondigitalocean.app/category/608bfb0ae747d9001dee9744/thread";


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSavePostClicked = () => {
        if(title.length > 0 && content.length > 0) {
            const requestBody = {
                'title': title,
                'content': content
            };
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            }).then(responseFromAPI => {
                if(responseFromAPI.status === 404) {
                    alert("Det gick fel, sidan finns inte");
                }
                else {
                    setTitle('');
                    setContent('');
                }
            });
        }
        
    }

    return (
        <section>
            <h2>Add a New thread</h2>
            <form>
                <section>
                    <label htmlFor="postTitle">Title: </label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </section>
                <br />
                <section>
                    <label htmlFor="postContent">Content: </label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button type="button" onClick={() => onSavePostClicked()}>Post thread</button>
                </section>
            </form>
        </section>
    )
}

export default AddPostForm