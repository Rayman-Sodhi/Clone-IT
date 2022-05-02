import * as actionTypes from '../actions/actionTypes';
import {projectStorage, projectFirestore, timeStamp} from '../../firebase/config';
import firebase from 'firebase';

export const uploadStart = ()=>{
    return {
        type: actionTypes.UPLOAD_SHOTS_START
    }
}

export const uploadSuccess = (shotDetails, imageUrl)=> {
    return {
        type: actionTypes.UPLOAD_SHOTS_SUCCESS,
        shotDetails:shotDetails,
        imageUrl:imageUrl
    }
}

export const UploadShot = ({file, shotDetails})=>{

    let imageUrl='', progress=0, error='';

    return dispatch=>{
        dispatch(uploadStart());
        const storageRef= projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('shots');
        const userRef = projectFirestore.collection('users');

        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            progress=percentage;
        }, (err)=>{
            console.log(err);
        }, async ()=>{
            const url= await storageRef.getDownloadURL();
            imageUrl=url;
            const createdAt= timeStamp()

            collectionRef.add({
                imageUrl,
                shotDetails,
                createdAt,
                comments:[]
            }).then(shot=>{
                userRef.where("uid","==",shotDetails.userId).get()
                    .then(snapShot=>{
                        snapShot.forEach(doc=>{
                            userRef.doc(doc.id).update({
                                shots:firebase.firestore.FieldValue.arrayUnion(shot.id)
                            })
                        })
                    })
            })

            

            dispatch(uploadSuccess(shotDetails,imageUrl))
        })
    }
}

export const updateShotStart = ()=>{
    return {
        type: actionTypes.SHOT_UPDATE_START
    }
}

export const updateShotFailed = error=>{
    return {
        type: actionTypes.SHOT_UPDATE_FAILED,
        error: error
    }
}

export const updateShotSuccess = ()=>{
    return {
        type: actionTypes.SHOT_UPDATE_SUCCESS
    }
}

export const updateShot = (shotDetails,shotId)=>{
    return dispatch=>{

        dispatch(updateShotStart())

        const collectionRef = projectFirestore.collection('shots');

        collectionRef.doc(shotId).update({
            "shotDetails":{
                ...shotDetails
            }
        })

    }
}