import * as actionTypes from '../actions/actionTypes';

const initialState ={
    token:null,
    userId: null,
    userName:'',
    email:'',
    name:'',
    error: null,
    loading: false,
    authRedirectPath:'/',
    profileImageUrl:'',
    loggedIn:false
}

const reducer = (state=initialState, action) =>{

    switch(action.type){

        case actionTypes.AUTH_START:
            return {...state, loading:true}
        
        case actionTypes.SIGNUP_FAIL:
            return {...state, loading:false, error: action.error}

        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading:false,
                token:action.token,
                userName:action.username,
                name:action.name,
                userId:action.uid,
                error:null,
                loggedIn:true

            }

        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                token:action.token,
                ...action.userData,
                error: null,
                loggedIn:true,
                userId:action.uid

            }

        case actionTypes.AUTH_LOGOUT:
            return {
                loading:false,
                token:'',
                userName:'',
                name:'',
                loggedIn:false
            }

        case actionTypes.UPDATE_USER_START:
            return {
                ...state,
                loading:true
            }
    
        case actionTypes.UPDATE_USER_FAILED:
            return {
                ...state,
                loading:false
            }
    
        case actionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                ...action.userData
            }

        default:
            return state;
    }
}

export default reducer;