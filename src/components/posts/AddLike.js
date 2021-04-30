import React, {useEffect, useState} from 'react'

const AddLike = ({type, id, numberOfLikes}) => {

    const postLike = () => {
        // fetch('')
    }

    return (
        <div>
            <button type="button" onClick={() => postLike()}>Like</button>
            <span>{numberOfLikes}</span>
        </div>
    )
}

export default AddLike