import * as actionTypes from '../actions/actionTypes';
import {auth} from '../../firebase/config';
import { projectFirestore } from '../../firebase/config';
import {fetchUser} from './users';

export const authStart = ()=>{
    return {
        type: actionTypes.AUTH_START
    }
}

export const signUpSuccess = (name,uid, token)=>{
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        uid:uid,
        token:token,
        name:name
    }
}

export const loginSuccess = (uid, token,userData)=>{
    return {
        type: actionTypes.LOGIN_SUCCESS,
        uid:uid,
        token:token,
        userData: userData
    }
}

export const signUpFail = error=>{
    return {
        type: actionTypes.SIGNUP_FAIL,
        error:error
    }
}


export const signUp = signUpData =>{
    return dispatch=>{


        dispatch(authStart());

        const collectionRef=projectFirestore.collection('users');

        auth.createUserWithEmailAndPassword(signUpData.email,signUpData.password)
            .then(({user})=>{
                localStorage.setItem('uid', user.uid)
                localStorage.setItem('token', user.refreshToken)
                localStorage.setItem('name', signUpData.name)
                dispatch(signUpSuccess(signUpData.name,user.uid, user.refreshToken))
                const profileImageUrl="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
                
                collectionRef.add({...signUpData,uid:user.uid,profileImageUrl,introduction:'',likedShots:[],shots:[]})
                
            }).catch(err=>{
                dispatch(signUpFail(err.message))
            })
    }
}

export const signIn = loginData =>{
    return dispatch=>{

        dispatch(authStart());

        auth.signInWithEmailAndPassword(loginData.email,loginData.password)
            .then(({user})=>{
                localStorage.setItem('uid', user.uid)
                localStorage.setItem('token', user.refreshToken)
                projectFirestore.collection('users').where("uid",'==',user.uid)
                    .onSnapshot(snap=>{
                        snap.forEach(doc=>{
                            dispatch(loginSuccess(user.uid,user.refreshToken,doc.data()))
                            // dispatch(fetchUser(user.uid))
                            
                            localStorage.setItem('name', doc.data().name)
                        })
                    })

                
                
            }).catch(err=>{
                dispatch(signUpFail(err.message))
                console.log(err.message)
            })
    }
}

export const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('uid')
    localStorage.removeItem('name')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}



export const authCheckState = ()=>{
    return dispatch=>{

        const token = localStorage.getItem('token');
        const uid = localStorage.getItem('uid');

        projectFirestore.collection('users').where("uid","==",uid)
            .onSnapshot(snapShot=>{
                snapShot.forEach(doc=>{
                    localStorage.setItem('name',doc.data().name)
                    dispatch(loginSuccess(uid, token, doc.data()))
                    // dispatch(fetchUser(uid))
                })
            })

        if(!token){
            dispatch(logout())
        }
            
    }
}