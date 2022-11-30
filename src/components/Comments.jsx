import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Comment from './Comment';


export default function Comments({ todoId, comment }) {
    const [showReplies, setShowReplies] = useState(true)
    let postCommentsIds = useSelector(state => state.todos.comments.postIds);
    let comments = useSelector(state => state.todos.comments.byId);
    let commentsIds;
    if (comment) {
        commentsIds = comment.comments;
    } else {
        commentsIds = postCommentsIds;
    }
    useEffect(() => {
        if (comment) {
            setShowReplies(!showReplies)
        }
    }, [])

    const showRepliesHandler = () => {
        setShowReplies(!showReplies)
    }
    console.log(commentsIds)
    return (
        <>
            {/* вот тут разобраться с отображением */}
            {/* show/hide */}
            {/* число комментариев */}
            {!comment ? <div>Comments</div> : ''}
            {comment && comment.comments ? <button className="button" onClick={showRepliesHandler}>show replies</button> : ''}
            <div>
                {showReplies ?
                    commentsIds.map(i => {
                        const item = comments[i];
                        return <Comment comment={item} todoId={todoId} />
                    })
                    : ''
                }
            </div>
        </>
    )
}
