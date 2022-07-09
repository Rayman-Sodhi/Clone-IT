import React from 'react'

const Comment = (props) => {
    let date=new Date(props.comment.date.toDate())
    return (
        <div className="comment">
            <div className="row">
                <div className="comment__section">
                    {/* <div className="comment__section-left">
                        <img src={props.comment.profileImageUrl} alt="avatar" />
                    </div> */}
                    <div className="comment__section-right">
                        <h4>{props.comment.name}</h4>
                        <p>{props.comment.message}</p>
                        <p className="date__section">posted on {date.getDate()+'/'+date.getMonth() + '/' + date.getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;
