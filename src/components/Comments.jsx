import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Comment from './Comment';


export default function Comments({ todoId, comment }) {
    const [showReplies, setShowReplies] = useState(true)
    let comments = useSelector(state => state.todos.comments.byId);
    let commentsIds;
    let postCommentsIds = useSelector(state => state.todos.todos.byId[todoId].comments);
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

    return (
        <>
            {/* вот тут разобраться с отображением */}
            {/* show/hide */}
            {/* число комментариев */}
            {comment && comment.comments ? <button className="button" onClick={showRepliesHandler}>show replies</button> : ''}
            {postCommentsIds.length || commentsIds.length ?

                <div>
                    {!comment ? <h4 className='todo__title'>Comments</h4> : ''}
                    {showReplies ?
                        <div className='todo__comments'>
                            {commentsIds.map(i => {
                                const item = comments[i];
                                return <Comment comment={item} todoId={todoId} />
                            })}
                        </div>
                        : ''
                    }
                </div> : ''

            }

        </>
    )
}
