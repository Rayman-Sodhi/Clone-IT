import * as actionTypes from './actionTypes';


export const fetchCommentStart = ()=>{
    return {
        type: actionTypes.FETCH_COMMENT_START
    }
}

export const fetchCommentFailed = ()=>{
    return {
        type: actionTypes.FETCH_COMMENT_FAILED
    }
}

export const fetchCommentSuccess = comments=>{
    return {
        type: actionTypes.FETCH_COMMENT_SUCCESS,
        comments: comments
    }
}

export const fetchComment = ()=>{
    return dispatch=>{

        dispatch(fetchCommentStart);


    }
}


