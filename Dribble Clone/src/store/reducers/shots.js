import * as actionTypes from '../actions/actionTypes';

const initialState = {
    shots: [],
    loading: false,
    selectedShot:{},
    shotDetails:{},
    comments:[],
    likedShots:[]
}

const reducer = (state=initialState, action) => {
    
    switch(action.type){

        case actionTypes.FETCH_SHOTS_START:
            return {...state, loading:true}

        case actionTypes.FETCH_SHOTS_SUCCESS:
            return {
                ...state,
                loading: false,
                shots:action.shots
            }

        case actionTypes.FETCH_SINGLESHOT_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedShot:action.singleShot,
                shotDetails: action.shotDetails,
                comments: action.comments
            }

        case actionTypes.UPLOAD_SHOTS_START:
            return {
                ...state,
                loading: false
            }

        case actionTypes.UPLOAD_SHOTS_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case actionTypes.POST_COMMENT_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.POST_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                // comments:[...state.comments.push(action.comment)]
            }

        case actionTypes.SHOT_LIKED_SUCCESS:
            let updatedLikeShots=[...state.shots]

            updatedLikeShots.forEach(shot=>{
                if(shot.id==action.shotId){
                    shot.shotDetails.userLiked.push(action.uid)
                }
            })

            // console.log(updatedShots)
            // updatedLikeState.likedShots.push(action.shotId)

            return {
                ...state,
                ...updatedLikeShots
            }

        case actionTypes.SHOT_DISLIKED_SUCCESS:
            let updatedDislikeShots=[...state.shots]

            updatedDislikeShots.forEach(shot=>{
                if(shot.id==action.shotId){
                    shot.shotDetails.userLiked.pop()
                }
            })

            return {
                ...state,
                ...updatedDislikeShots
            }
        

        default:
            return state
    }
}

export default reducer;
