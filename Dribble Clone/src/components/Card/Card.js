import React,{useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {shotLiked,shotDisliked} from '../../store/actions/shots'

const Card = (props) => {

    let shot=props.shot;
    const [redirect,setRedirect]=useState(null)
    const [imageStatus, setImageStatus]=useState("loading")
   

    const clickHandler= ()=>{
        setRedirect(`/shots/shot-details/${shot.id}/${shot.shotDetails.userId}`)
    }

    const likeHandler =(e)=>{
        
        e.stopPropagation()

        if(props.authDetails.loggedIn){
            if(props.authDetails.likedShots.includes(shot.id)){
                props.onDisLikeShot(shot.id, props.authDetails.userId)
                console.log("disliked")
            } else {
                props.onLikeShot(shot.id, props.authDetails.userId)
                console.log("liked")
            }
        } else {
            props.history.push("/auth/sign-in")
        }
    }

    const handleImageLoaded = ()=>{
        setImageStatus("loaded")
    }

    if(redirect)
        props.history.push(redirect)
    
    return (
        <>
        <div className="col-1-of-4" key={shot.id}>
            <div className="shot__content">
                <div className="card" onClick={clickHandler}>
                    <div className="image__details">
                        <h3 className="image__title">{shot.shotDetails.title.substring(0,10)}{shot.shotDetails.title.length<=10 ? null:"..."}</h3>
                        <div className="image__action-button">
                            <button className="image-button"><i className="fa fa-folder"></i></button>
                            <button className="image-button" onClick={likeHandler}><i className="fa fa-heart"
                                style={{color:shot.shotDetails.userLiked.includes(props.authDetails.uid)? "#EA4C89":null}}></i></button>
                        </div>
                    </div>
                    <img src={imageStatus=="loaded"? shot.imageUrl:require("../../images/loading.gif")} alt="" className="card__image" onLoad={handleImageLoaded}/>
                    
                </div>
                <div className="shot__details">
                    <div className="user__informations">
                        {/* <div className="avatar">
                            <Link to="/user/tnmsnhr"><img src={shot.shotDetails.profileImageUrl} alt="" className="avatar__image" /></Link>
                        </div> */}
                        <div className="display__name">{shot.shotDetails.name}</div>
                        <div className="user__badge">PRO</div>
                    </div>
                    <div className="shot__stats">
                        <i className="fa fa-comment stat-icon" onClick={clickHandler}></i><span className="shot__stats-count">{shot.comments.length}</span>
                        <i className="fa fa-heart stat-icon" onClick={likeHandler} style={{color:shot.shotDetails.userLiked.includes(props.authDetails.uid)? "#EA4C89":null}}></i>
                        <span className="shot__stats-count">
                            {shot.shotDetails.userLiked.length}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps=state=>{
    return {
        uid: state.authState.uid,
        shotState:state.shotsState.shots,
        userDetails:state.userState,
        authDetails: state.authState
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onLikeShot: (id,uid)=>{dispatch(shotLiked(id,uid))},
        onDisLikeShot: (id,uid)=>{dispatch(shotDisliked(id,uid))}
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Card));
