import React, { useState } from 'react'
import AddComment from './AddComment';
import Comments from './Comments';
import Modal from './Modal';

export default function Comment({ todoId, comment }) {
    // const { text, id } = comment;
    const [showCommentModal, setShowCommentModal] = useState(false)
    const clickHandler = () => {
        setShowCommentModal(true)
    }
    return (
        <div className='todo__comment'>
            <div>{comment.text}</div>
            <button className="button" onClick={clickHandler}>reply</button>
            <Comments todoId={todoId} comment={comment} />
            {showCommentModal ?
                <Modal title="Reply a comment">
                    <AddComment showModal={setShowCommentModal} todoId={todoId} commentId={comment.id} />
                </Modal> : ""
            }
        </div>
    )
}
