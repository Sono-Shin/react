import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "신성호",
        comment: "안녕하세요, 신성호입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "박명수",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
    {
        name: "정준하",
        comment: "하하하 재미있어요~!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;