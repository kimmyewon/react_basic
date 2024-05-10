import React from "react";
import Comment from "./Comment";


const comments = [
    {
        name: "김혜원",
        comment: "First~~~",
    },
    {
        name: "김메옹",
        comment: "Second~~~",
    },
    {
        name: "기메원",
        comment: "Thrid~~~",
    },
];


function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    )
}

export default CommentList;