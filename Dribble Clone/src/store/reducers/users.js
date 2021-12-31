import * as actionTypes from '../actions/actionTypes';

const initialState= {
    email:'',
    profileImageUrl:'',
    name:'',
    uid:'',
    username:'',
    loading:false
}

const reducer = (state=initialState, action)=>{

    switch(action.type){
        case actionTypes.USER_FETCH_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.USER_FETCH_SUCCESS:
            return {
                loading: false,
                ...action.user
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
            return {...state}
    }
}

export default reducer;