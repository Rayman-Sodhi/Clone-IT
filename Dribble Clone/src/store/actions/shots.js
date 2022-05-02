import * as actionTypes from './actionTypes';
import firebase from 'firebase';
import {projectFirestore, projectStorage,timeStamp} from '../../firebase/config';

export const fetchShotStart = ()=>{
    return {
        type:actionTypes.FETCH_SHOTS_START
    }
}

export const fetchShotSuccess = allShots =>{
    return {
        type: actionTypes.FETCH_SHOTS_SUCCESS,
        shots: allShots
    }
}

export const fetchSingleShotSuccess = (shot, shotDetails, comments) =>{
    return {
        type: actionTypes.FETCH_SINGLESHOT_SUCCESS,
        singleShot: shot,
        shotDetails: shotDetails,
        comments: comments
    }
}

export const fetchShot = id=>{

    return dispatch=>{
        dispatch(fetchShotStart())
        projectFirestore.collection('shots').doc(id)
            .onSnapshot(doc=>{
                dispatch(fetchSingleShotSuccess(doc.data(), doc.data().shotDetails, doc.data().comments))
            })
    }
}

export const fetchShots = (filterCriteria,pathname) =>{
    return dispatch=>{

        dispatch(fetchShotStart())

        let unsubscribe;

        if((pathname.includes('/user/') || pathname.includes('/my-profile/')) && !pathname.includes('/liked-shots')){
            unsubscribe = projectFirestore.collection('shots')
                .where("shotDetails.userId","==",filterCriteria).get()
                    .then(snap=>{
                        let documents = []
                        snap.forEach(doc=>{
                            documents.push({
                                ...doc.data(), id: doc.id
                            })
                        })
                        dispatch(fetchShotSuccess(documents))

                    })

        } else if(pathname.includes('/liked-shots')){
            
            projectFirestore.collection('shots')
                .where("shotDetails.userLiked","array-contains",filterCriteria).get()
                    .then(snap=>{
                        let documents = []
                        snap.forEach(doc=>{
                            documents.push({
                                ...doc.data(), id: doc.id
                            })
                        })
                        dispatch(fetchShotSuccess(documents))

                    })
        }else {

            if(filterCriteria==undefined){
                filterCriteria="all"
            }
            let unsubscribe;

            unsubscribe = projectFirestore.collection('shots')
                .where("shotDetails.tags","array-contains",filterCriteria).get()
                    .then(snap=>{

                        let documents = []
                        snap.forEach(doc=>{
                            documents.push({
                                ...doc.data(), id: doc.id
                            })
                        })

                        dispatch(fetchShotSuccess(documents))
                        
                    })

        }
        
    }
}

export const postCommentStart = ()=>{

    return {
        type: actionTypes.POST_COMMENT_START
    }
}

export const postCommentSuccess = comment =>{

    return {
        type: actionTypes.POST_COMMENT_SUCCESS,
        comment:comment
    }
}

export const postComment = (comment, shotId) =>{

    return dispatch=>{
        dispatch(postCommentStart())

        const date=new Date()

        projectFirestore.collection('shots').doc(shotId).update({
            comments: firebase.firestore.FieldValue.arrayUnion({
                userId:comment.userId,
                message: comment.message,
                name:comment.name,
                date:date
            })
        })

        dispatch(postCommentSuccess(comment))
    }
}

export const shotLikeSuccess=(shotId,uid)=>{
    return {
        type:actionTypes.SHOT_LIKED_SUCCESS,
        shotId:shotId,
        uid:uid
    }
}

export const shotDisLikeSuccess=shotId=>{
    return {
        type:actionTypes.SHOT_DISLIKED_SUCCESS,
        shotId:shotId
    }
}

export const shotLiked=(shotId,uid)=>{

    return dispatch=>{
        
        const userRef=projectFirestore.collection('users')
        const shotRef=projectFirestore.collection('shots')

        //adding shot id in user's likedShot array
        userRef.where("uid","==",uid).get()
        .then(snap=>{
            snap.forEach(doc=>{
                userRef.doc(doc.id).update({
                    likedShots:firebase.firestore.FieldValue.arrayUnion(shotId)
                })
            })
        })

        //adding user id in userLiked array in shots collection

        shotRef.doc(shotId).update({
            "shotDetails.userLiked":firebase.firestore.FieldValue.arrayUnion(uid)
        })
        dispatch(shotLikeSuccess(shotId,uid))   
    }
}

export const shotDisliked = (shotId, uid)=>{

    return dispatch=>{
        const userRef=projectFirestore.collection('users')
        const shotRef=projectFirestore.collection('shots')

        //deleting shot id from user's likedShot array
        userRef.where("uid","==",uid).get()
        .then(snap=>{
            snap.forEach(doc=>{
                userRef.doc(doc.id).update({
                    likedShots:firebase.firestore.FieldValue.arrayRemove(shotId)
                })
            })
        })

        shotRef.doc(shotId).update({
            "shotDetails.userLiked":firebase.firestore.FieldValue.arrayRemove(uid)
        })

        dispatch(shotDisLikeSuccess(shotId))
    }
}