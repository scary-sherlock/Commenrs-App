import { Component } from "react"

import { v4 as uuidv4 } from "uuid"

import CommentItem from "../CommentItem"

import "./index.css"
import { formatDistanceToNow } from 'date-fns'

const initialContainerBackgroundClassNames = [
    'amber',
    'blue',
    'orange',
    'emerald',
    'teal',
    'red',
    'light-blue',
]

// Write your code here

class Comments extends Component {
    state = {
        commentsList: [],
        name: '',
        comment: '',
    }

    addComment = event => {
        event.preventDefault()
        const { commentsList, name, comment } = this.state

        const newComment = {
            id: uuidv4(),
            name,
            comment,
            isLiked: false,
            bgColor: this.getRandomColorClassName(),
            timeAdded: new Date()
        }

        this.setState({
            commentsList: [...commentsList, newComment],
            name: '',
            comment: '',
        })
    }

    getRandomColorClassName = () => {
        const index = Math.floor(Math.random() * 7)
        return initialContainerBackgroundClassNames[index]
    }

    onLike = commentId => {
        const { commentsList } = this.state
        const newCommentsList = commentsList.map(eachComment => {
            if (eachComment.id === commentId) {
                const isLiked = !eachComment.isLiked
                return { ...eachComment, isLiked }
            }
            return eachComment
        })
        this.setState({ commentsList: newCommentsList })
    }

    onChangeName = event => {
        this.setState({ name: event.target.value })
    }

    onChangeComment = event => {
        this.setState({ comment: event.target.value })
    }

    onDelete = commentId => {
        const { commentsList } = this.state
        const newCommentsList = commentsList.filter(eachComment => eachComment.id !== commentId)
        this.setState({ commentsList: newCommentsList })
    }

    render() {
        const { commentsList, name, comment } = this.state
        return (
            <div className="container">
                <div className="app-container">
                    <div className="comment-container">


                        <h1 className="heading">Comments</h1>
                        <p className="sub-heading">Leave your comments below</p>
                        <div className="comment-input-container">
                            <form className="comment-form" onSubmit={this.addComment}>
                                <p className="label">Add Comment</p>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={this.onChangeName}
                                />
                                <textarea
                                    className="input"
                                    placeholder="Your Comment"
                                    value={comment}
                                    onChange={this.onChangeComment}
                                />
                                <button type="submit" className="button">
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                    <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" />
                </div>
                <hr />
                <p><span className="number">{commentsList.length}</span> Comments</p>
                <ul className="comments-list">
                    {commentsList.map(eachComment => (
                        <CommentItem
                            key={eachComment.id}
                            commentDetails={eachComment}
                            onLike={this.onLike}
                            onDelete={this.onDelete}
                            time={formatDistanceToNow(eachComment.timeAdded)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Comments