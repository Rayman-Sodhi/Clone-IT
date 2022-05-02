import React, { Component} from 'react'
import Backdrop from '../Backdrop/Backdrop';
import { fetchShot, postComment, shotLiked, shotDisliked } from '../../store/actions/shots';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import Comments from '../Comments/Comments';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import {fetchUser} from '../../store/actions/users';
import Button from '../Button/Button';
import Share from '../Share/Share';
import {Spring} from 'react-spring/renderprops'


class Popup extends Component{

    state= {
        comment:{
            userId:'',
            message:'',
            name:'',
            profileImageUrl:''
        },
        show:false,
        prevLocation:'',
        imageStatus:"loading",
        showShare:false,
        showComment:false
    }

    componentDidMount(){
       
        this.props.onFetchShot(this.props.match.params.id)
        let userId=localStorage.getItem('uid')
        let name=localStorage.getItem('name')

        let updatedState={
            ...this.state,
            comment:{
                ...this.state.comment,
                userId:userId,
                name:name
            }
        }

        console.log(updatedState)

        this.setState({
            ...this.state,
            ...updatedState
        })

        this.props.onFetchUser(this.props.match.params.uid)

    }

    onSubmitHandler= (e)=>{
        e.preventDefault();
        this.props.onPostComment(this.state.comment,this.props.match.params.id)
        this.setState({
            ...this.state,
            comment:{
                ...this.state.comment,
                message:''
            }
        })
    }

    onChangeHandler = e =>{
        this.setState({
            ...this.state,
            comment:{
                ...this.state.comment,
                message:e.target.value,
                profileImageUrl:this.props.user.profileImageUrl

            }
        })
    }

    clickHandler =()=>{
        this.setState({show: !this.state.show})
    }

    likeDislikeHandler = ()=>{

        if(this.props.authDetails.loggedIn){

            if(this.props.shotDetails.userLiked.includes(this.props.authDetails.userId)){
                this.props.onDisLikeShot(this.props.match.params.id, this.props.authDetails.uid)
                console.log("disliked")
            } else {
                this.props.onLikeShot(this.props.match.params.id, this.props.authDetails.uid)
                console.log("liked")
            }
            
        } else {
            this.props.history.push("/auth/sign-in")
        }
    }

    imageLoaderHandler = ()=>{
        this.setState({imageStatus:"loaded"})
    }

    componentWillUnmount(){
        this.props.onFetchUser(null)
    }

    shareHandler = ()=>{
        this.setState({showShare:!this.state.showShare})
    }

    commentHandler = ()=>{
        this.setState({
            showComment:!this.state.showComment
        })
    }

    render(){
        let content =<Spinner />;
        let iconStyle=null;

        if(this.props.shotDetails.userLiked){
            content=(
                <>
                    <div className="row">
                        <div className="image__info margin-bottom-md">
                            <section className="user__area">
                                <div className="display__photo">
                                    <Link to={"/user/"+this.props.user.uid}>
                                        <img src={this.state.imageStatus=="loaded"? this.props.user.profileImageUrl : require("../../images/spin.gif")} onLoad={this.imageLoaderHandler}/>
                                    </Link>
                                    
                                </div>
                                <div className="user__details">
                                    <h4>{this.props.shotDetails.title}</h4>
                                    <p>{this.props.shotDetails.name} &middot; Following &middot; <span className="hire">Hire Me</span></p>
                                </div>
                            </section>
                            <section className="action__button">
                                <button className="btn btn-grey">Save</button>
                                <button className="btn btn-grey" onClick={this.likeDislikeHandler}>
                                    <i className="fa fa-heart" style={{color: this.props.shotDetails.userLiked.includes(this.props.authDetails.uid)? "#EA4C89":null}}></i>
                                </button>
                            </section>
                        </div>
        
                        <div className="row">
                            <div className="image__content">
                                <img src={this.state.imageStatus=="loaded"? this.props.shotItem.imageUrl : require("../../images/spin.gif")} onLoad={this.imageLoaderHandler} alt="" />
                                <p>
                                    {this.props.shotDetails.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    {this.props.authDetails.uid === this.props.match.params.uid ?
                    <div className="row modify__button">
                        <Button btnType="default"><Link to={"/shots/edit/"+this.props.match.params.id}>Edit</Link></Button>
                        <Button btnType="primary">Delete</Button>
                    </div> :null }
                    <div className="row">
                        <div className="user-details-section margin-top-xl">
                            <Link to={"/user/"+this.props.user.uid}>
                                <img src={this.state.imageStatus=="loaded"? this.props.user.profileImageUrl : require("../../images/spin.gif")} onLoad={this.imageLoaderHandler} />
                            </Link>
                            <h2 className="margin-top-lg">{this.props.user.name}</h2>
                            <p className="margin-bottom-md">{this.props.user.introduction}</p>
                            <Button btnType="primary"><i className="fa fa-envelope"></i> Hire Me</Button>
                        </div>
                    </div>
                    <div className="row">
                        <h4>More by {this.props.user.name}</h4>
                    </div>
                </>
            )

            iconStyle=this.props.shotDetails.userLiked.includes(this.props.authDetails.uid)? "#EA4C89":null
        }

        return (

            <Spring
                from={{ opacity: 0,marginTop:'-200px' }}
                to={{ opacity: 1, marginTop:'0px' }}>
                    
                    {props => <div style={props}>
                        <div>
                            {this.state.showShare ? <Share clicked={this.shareHandler} url={this.props.shotItem.imageUrl} name={this.props.shotDetails.name}/>:null}
                            <Backdrop show={!this.state.show} />
                            <div className="popup__area">
                                <div className="left__sidebar">
                                    <div className="popup__left">
                                        {content}
                                    </div>
                                </div>
                
                                <div className="popup__right">
                                    <div className="row">
                                        <div className="shot__sidebar">
                                            <section className="sidebar__button-area">
                                                <div className="button__left">
                                                    <button className="btn btn-default" onClick={this.shareHandler}><i className="fa fa-share-square"></i></button>
                                                    <button className="btn btn-default" onClick={this.likeDislikeHandler}>
                                                        <i className="fa fa-heart" style={{color: iconStyle}}></i>
                                                    </button>
                                                    <button className="btn btn-default"><i className="fa fa-folder"></i></button>
                                                    <button className="btn btn-default comment-button" onClick={this.commentHandler}><i className="fa fa-comment"></i></button>
                                                </div>
                
                                                <div className="button__right">
                                                    <button className="btn btn-default" onClick={this.clickHandler}><i className="fa fa-info-circle"></i> Details</button>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div className={["comment__area",this.state.showComment ? "comment__shown":null].join(' ')}>
                                        <div className="row">
                                            {localStorage.getItem('uid') ?
                                            <form className="form" onSubmit={this.onSubmitHandler}>
                                                <div className="form__group margin-bottom-md margin-top-md">
                                                    <label htmlFor="description" className="form__label">Feedback</label>
                                                    <textarea 
                                                        type="text" 
                                                        className="form__input-desc" 
                                                        name="size" 
                                                        id="description" 
                                                        placeholder="Share your thoughts" 
                                                        onChange={this.onChangeHandler}
                                                        value={this.state.comment.message}
                                                        required></textarea>
                                                    <button className="btn btn-primary post-button margin-top-sm">Post</button>
                                                </div>
                                            </form>
                                            :
                                            <div className="auth__suggestion margin-bottom-md">
                                                <div className="row">
                                                    <img src='https://dribbble.com/assets/packs/media/shot-reskin/comments-signup-avatars-ea2f52fd.png' />
                                                    <h2>Join the discussion</h2>
                                                    <p className="margin-bottom-md">Looking to share your feedback and join in on the conversation?</p>
                                                    <Link to="/auth/sign-in"><button className="btn btn-primary">Sign up to discuss</button></Link>
                                                </div>
                                            </div>
                                            }
                                        </div>
                
                                        <div className="row">
                                            {this.props.comments ? <Comments comments={this.props.comments}/>:null}
                                        </div>
                                    </div>
                                </div>
                                {this.state.show ? <Details shotItem={this.props.shotItem} show={this.state.show} clicked={this.clickHandler}/>:null}
                            </div>
                        </div>
                    </div>}  
                </Spring>
        )

    }
}

const mapStateToProps = state=>{
    return {
        shotItem: state.shotsState.selectedShot,
        shotDetails: state.shotsState.shotDetails,
        comments: state.shotsState.comments,
        user:state.userState,
        authDetails: state.authState
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onFetchShot: (id)=>{dispatch(fetchShot(id))},
        onPostComment: (comment, id)=>{dispatch(postComment(comment, id))},
        onFetchUser: (id)=>{dispatch(fetchUser(id))},
        onLikeShot: (id,uid)=>{dispatch(shotLiked(id,uid))},
        onDisLikeShot: (id,uid)=>{dispatch(shotDisliked(id,uid))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
