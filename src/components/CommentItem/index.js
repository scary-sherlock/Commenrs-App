import './index.css'

const CommentItem = props => {
    const { commentDetails, onLike, onDelete, time } = props

    const {
        name,
        comment,
        id,
        isLiked,
        bgColor,
    } = commentDetails

    const onClickLike = () => {
        onLike(id)
    }

    const onClickDelete = () => {
        onDelete(id)
    }

    return (
        <li className="comment-item">
            <div className={"comment-content"}>
                <p className={`initial-container ${bgColor}`}>{name.slice(0, 1)}</p>
                <div className="nameComment">
                    <div className="flex">

                        <p className="name">{name}</p>
                        <p className='time'>{time} ago</p>
                    </div>
                    <p className="comment">{comment}</p>
                </div>
            </div>
            <div className="comment-actions">
                <button
                    type="button"
                    className="like-button"
                    onClick={onClickLike}
                    data-testid={`like-Button-${id}`}
                >
                    <img
                        src=
                        {isLiked ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" :
                            "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"}
                        alt="like"
                    />
                </button>
                <button
                    type="button"
                    className="delete-button"
                    onClick={onClickDelete}
                    data-testid={`delete-Button-${id}`}
                >
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                        alt="delete"
                    />
                </button>
            </div>
        </li>
    )
}

export default CommentItem