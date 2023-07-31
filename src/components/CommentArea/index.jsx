import Comment from "../Comment"
import PropType from 'prop-types'

CommentArea.propTypes = {
    commentsArray: PropType.array
}

export default function CommentArea({ commentsArray }) {
    return (
        <>
            {
                (commentsArray.length == 0) ?
                    <p style={{ fontSize: ".8rem" }}>
                        Seja o primeiro a comentar!
                    </p>
                    :
                    commentsArray.map(comment => (
                        <Comment
                            comment={comment.commentContent}
                            email={comment.email}
                            id={comment.id}
                            creationDate={comment.creationDate}
                            key={comment.id}
                        />
                    ))
            }
        </>
    )
}