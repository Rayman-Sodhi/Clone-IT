import * as actionTypes from './actionTypes';
import {projectFirestore, projectStorage} from '../../firebase/config';


export const fetchUserStart=()=>{
    return {
        type: actionTypes.USER_FETCH_START
    }
}

export const fetchUserSuccess= user=>{
    return {
        type: actionTypes.USER_FETCH_SUCCESS,
        user: user
    }
}

export const fetchUser= (userId)=>{
    return dispatch=>{
        
        if(userId){
            dispatch(fetchUserStart())
            projectFirestore.collection('users').where("uid","==",userId).get()
                .then(snap=>{
                    snap.forEach(doc=>{
                        dispatch(fetchUserSuccess(doc.data()))
                        
                    })
                })
        } else {
            dispatch(fetchUserSuccess())
        }

    }
}

export const updateUserStart=()=>{
    return {
        type: actionTypes.UPDATE_USER_START
    }
}

export const updateUserFailed=()=>{
    return {
        type: actionTypes.UPDATE_USER_FAILED
    }
}

export const updateUserSuccess=userData=>{
    return {
        type: actionTypes.UPDATE_USER_SUCCESS,
        userData:userData
    }
}

export const updateUser= (userData, uid)=>{
    
    return dispatch=>{

        dispatch(updateUserStart())
        
        //uploading profile picture

        let imageUrl=userData.profileImageUrl
        let percentage=0
        const userRef=projectFirestore.collection('users')

        if(userData.file.name){
            const storageRef=projectStorage.ref(userData.file.name)

            storageRef.put(userData.file).on('state_changed', snap=>{
                percentage=snap.bytesTransferred/snap.totalBytes
            }, err=>{
                console.log(err)
            }, async ()=>{
                const url= await storageRef.getDownloadURL();
                imageUrl=url;
                
                updateShotinfo()
    
                userRef.where("uid","==",userData.uid).get()
                .then(snap=>{
                    snap.forEach(doc=>{
                        userRef.doc(doc.id)
                        .update({
                            profileImageUrl:url
                        })
                        dispatch(updateUserSuccess(doc.data()))
                    })
                })
            })
        }

        
        // updating userDoc in firestore
        console.log(userData.name)

        const updateShotinfo=()=>{
            userRef.where("uid","==",userData.uid).get()
            .then(snap=>{
                snap.forEach(doc=>{
                    userRef.doc(doc.id)
                    .update({
                        name: userData.name,
                        introduction:userData.introduction
                    })
                    dispatch(updateUserSuccess(userData))
                })
            })
        }

        updateShotinfo()

        //update username in Shot Doc
        const shotRef=projectFirestore.collection("shots");
        
        shotRef.where("shotDetails.userId","==",userData.uid).get()
            .then(shotSnap=>{
                shotSnap.forEach(shot=>{
                    shotRef.doc(shot.id).update({
                        "shotDetails.name":userData.name
                    })
                })
            })

        

        
    }
}

