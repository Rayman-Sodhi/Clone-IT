import React, { Component } from 'react';
import { connect } from 'react-redux';
import {UploadShot, updateShot} from '../../store/actions/upload';
import {fetchShot} from '../../store/actions/shots';
import {authCheckState} from '../../store/actions/auth';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Backdrop from '../../components/Backdrop/Backdrop';

class NewShots extends Component {

    state = {
        file:{},
        shotDetails:{
            title:'',
            tags:[],
            description:'',
            userId:'',
            name:'',
            userLiked:[]
        },
        redirectTo:null,
        isValid:false,
        imageUrl:'',
        tagList:[]
    }

    onChangeHandler = e =>{
        const selected = e.target.files[0]
        const imageTypes = ['image/png','image/jpg','image/jpeg']

        let reader = new FileReader();
        reader.readAsDataURL(selected)

        reader.onload = ()=>{
            if(reader.readyState === 2){
                this.setState({imageUrl:reader.result})
            }
        }

        reader.onprogress = e=>{
            console.log(e)
        }
        

        if(selected && imageTypes.includes(selected.type)){
            this.setState({file:selected})
        }
    }

    onInputChangeHandler = e =>{

        const updatedShotData = {...this.state.shotDetails}
        if(e.target.id === 'tags'){
            console.log(this.state.tagList)
            const newTag=this.state.tagList;
            updatedShotData.tags=newTag.concat('all');
        } else {
            updatedShotData[e.target.id]=e.target.value
            updatedShotData['userId']=localStorage.getItem('uid')
            updatedShotData['name']=localStorage.getItem('name')
        }

        this.setState({
            ...this.state,
            shotDetails:updatedShotData
        })

    }

    deleteHandler = ()=>{
        this.setState({imageUrl:'',file:{}})
    }

    onCancelHandler=()=>{
        this.props.history.goBack()
    }

    onSubmitHanlder= ()=>{

        let shotDetails = this.state.shotDetails;

        if(shotDetails.title.length>0 && shotDetails.description.length>0){
            this.props.onUploadShot({
                ...this.state,
            shotDetails:{
                ...this.state.shotDetails,
                tags:[...this.state.tagList,"all"]
            }})
            this.setState({redirectTo:'/following/all'})
        } else {
            alert('Please fill the form before uploading')
        }
    }

    componentDidMount(){
        this.props.onTryAutoLogin()

        if(this.props.location.pathname.includes("/edit/")){
            this.props.onFetchShot(this.props.match.params.shotid)
            console.log(this.props.match.params.shotid)
            this.setState({
                ...this.state,
                shotDetails:{
                    ...this.props.shot.shotDetails
                },
                tagList:[...this.props.shot.shotDetails.tags]
            })
        }
    }

    tagHanlder =event=>{
        if(event.key=="Enter"){
            this.setState({
                tagList:[...this.state.tagList,event.target.value]
            })

        event.target.value=""
        }
    }

    removeTag = index=>{
        console.log("updatedTagList")
        let updatedTagList=[...this.state.tagList]
        updatedTagList.splice(index,1)
        
        this.setState({
            tagList:updatedTagList
        })
    }

    updateHanlder = ()=>{

        this.setState({
            redirectTo:"/shots/shot-details/"+this.props.match.params.shotid+"/"+this.props.shot.shotDetails.userId
        })
        
        const updatedShotDetails={...this.state.shotDetails}
        updatedShotDetails.tags=[...this.state.tagList]

        this.props.onUpdateShot(updatedShotDetails,this.props.match.params.shotid)
    }

    render() {

        console.log(this.state)

        let popup=null;
        if(!this.state.isValid){
            popup= (
                <>
                    <Backdrop path='/shots'/>
                </>
            )
        }

        let imagePreviewContent=(
                <div className="upload__image-area">
                    <div>
                        <div className="media__hint">
                            <div className="row">
                                <div className="col-1-of-3">
                                    <div className="image__type">
                                        <div className="image__type--left"><i className="fa fa-file-image-o"></i></div>
                                        <div className="image__type--right">
                                            <h4 className="image__type--heading">High resolution images</h4>
                                            <p className="image__type--desc">PNG, JPG, JPEG</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-1-of-3">
                                    <div className="image__type">
                                        <div className="image__type--left"><i className="fa fa-file-video-o"></i></div>
                                        <div className="image__type--right">
                                            <h4 className="image__type--heading">Animated GIFs</h4>
                                            <p className="image__type--desc">400x300, 800x600</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-1-of-3">
                                    <div className="image__type">
                                        <div className="image__type--left"><i className="fa fa-video-camera"></i></div>
                                        <div className="image__type--right">
                                            <h4 className="image__type--heading">Videos</h4>
                                            <p className="image__type--desc">MP4, 4:3, 24 seconds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label htmlFor="upload-file" className="upload__image-label">
                            <i className="fa fa-cloud-upload"></i>
                            <div className="upload__image-hint">
                                <h4><span>browse</span> to choose a file</h4>
                            </div>
                        </label>
                        <input type="file" className="upload__image-input" id="upload-file" accept="image/png,image/jpg,image/jpeg" onChange={this.onChangeHandler}/>
                    </div>
                </div>
        )

        if(this.props.location.pathname.includes("/edit/")){
            imagePreviewContent=(
                <div className="upload__image-preview">
                    <img src={this.props.shot.imageUrl} />
                </div>
            )
        }

        return (
            <div className="media__type">
                {/* {popup} */}
                <section className="upload__image margin-top-lg">
                    <div className="row">
                        <div className="col-2-of-3">

                        {this.state.imageUrl ? 
                                <div className="upload__image-preview">
                                    <button className="delete-image" onClick={this.deleteHandler}><i className="fa fa-trash"></i></button>
                                    <img src={this.state.imageUrl} />
                                </div>:imagePreviewContent}
                            
                        </div>
                        <div className="col-1-of-3">
                            <div className="upload__image-desc">
                                <form action="#" className="form">
                                    <div className="form__group margin-bottom-md">
                                        <label htmlFor="title" className="form__label">Title</label>
                                        {this.props.location.pathname.includes("/edit/") ?
                                        <input id="title" type="text" defaultValue={this.state.shotDetails.title} className="form__input" placeholder="Add a Title" onChange={this.onInputChangeHandler} required />:
                                        <input id="title" type="text"  className="form__input" placeholder="Add a Title" onChange={this.onInputChangeHandler} required />}
                                    </div>

                                    <div className="form__group margin-bottom-md">
                                        <label htmlFor="tags" className="form__label">Tags
                                            <i className="fa fa-question-circle form-title-info">
                                                <div className="form__tooltip">
                                                    <p className="form__tooltip-text">Start typing text, hit Enter to complete. Click the "x" button to delete tag</p>
                                                </div>
                                            </i>
                                        </label>
                                        <div className="tage__area">
                                            {this.state.tagList.map((tag,index)=>(
                                                <span className="tag__style" key={index}>{tag} <span className="tag-delete" onClick={()=>this.removeTag(index)}>&#10006;</span></span>
                                            ))}
                                            <span>
                                                <input id="tags" className="tag__input-area" type="text" placeholder="Add Tags" onKeyUp={this.tagHanlder} required />
                                            </span>
                                        </div>
                                        
                                        {/* <input id="tags" type="text" className="form__input tag__input" placeholder="Add Tags" onChange={this.onInputChangeHandler} required /></span> */}
                                    </div>
                                    <div className="form__group margin-bottom-md">
                                        <label htmlFor="tags" className="form__label tag-suggestions">SUGGESTED TAGS
                                            <i className="fa fa-question-circle form-title-info">
                                                <div className="form__tooltip">
                                                    <p className="form__tooltip-text">These tags are recommended based on your tag history and popular across Dribbble</p>
                                                </div>
                                            </i>
                                        </label>
                                        <ul className="tag-lists">
                                            <li className="tag">illustrator</li>
                                            <li className="tag">abstract</li>
                                            <li className="tag">icon</li>
                                            <li className="tag">red</li>
                                            <li className="tag">gradient</li>
                                            <li className="tag">logo</li>
                                            <li className="tag">vector</li>
                                            <li className="tag">ui</li>
                                            <li className="tag">branding</li>
                                            <li className="tag">idenntity</li>
                                        </ul>
                                    </div>

                                    <div className="form__group margin-bottom-md">
                                        <label htmlFor="description" className="form__label">Description
                                            <i className="fa fa-question-circle form-title-info">
                                                <div className="form__tooltip">
                                                    <p className="form__tooltip-text">URLs are automatically hyperlinked.
                                                        Like breaks and paragraphs are automatically generated. a, em, strong and code tags are accepted
                                                    </p>
                                                </div>
                                            </i>
                                        </label>
                                        {this.props.location.pathname.includes("/edit/") ? <textarea type="text" defaultValue={this.state.shotDetails.description} className="form__input-desc" name="size" id="description" 
                                            placeholder="Tell us about your process and how you arrived at thui design" onChange={this.onInputChangeHandler}></textarea>:
                                        <textarea type="text" className="form__input-desc" name="size" id="description" 
                                            placeholder="Tell us about your process and how you arrived at thui design" onChange={this.onInputChangeHandler}></textarea>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="media__type-button-area">
                        <div className="media__type-button-area--left">
                            <Button btnType='default' clicked={this.onCancelHandler}>Cancel</Button>
                        </div>
                        <div className="media__type-button-area--right">
                            <Button btnType='default'>Schedule</Button>
                            {this.props.location.pathname.includes("/edit/")?
                            <Button btnType='primary' clicked={this.updateHanlder} disabled={this.state.isValid || this.props.loading}>{this.props.loading? "Updating...":"Update"}</Button>:
                            <Button btnType='primary' clicked={this.onSubmitHanlder} disabled={this.state.isValid || this.props.loading}>{this.props.loading? "Uploading...":"Publish"}</Button>}
                        </div>
                    </div>
                </section>
                {this.state.redirectTo ? <Redirect to={this.state.redirectTo}/>:null}
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        loading: state.shotsState.loading,
        shot: state.shotsState.selectedShot
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onUploadShot: (file)=>dispatch(UploadShot(file)),
        onTryAutoLogin: ()=>dispatch(authCheckState()),
        onFetchShot: (id)=>{dispatch(fetchShot(id))},
        onUpdateShot: (shotDetails, shotId)=>{dispatch(updateShot(shotDetails, shotId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewShots)


