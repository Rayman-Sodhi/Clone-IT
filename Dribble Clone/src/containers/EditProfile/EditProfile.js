import React, { Component } from 'react'
import Backdrop from '../../components/Backdrop/Backdrop';
import {connect} from 'react-redux';
import {updateUser} from '../../store/actions/users'
import Spinner from '../../components/Spinner/Spinner';
import CircleSpinner from '../../components/Spinner/CircleSpinner';

class EditProfile extends Component {

    state={
        introduction:'',
        name:'',
        profileImageUrl:'',
        uid:null,
        file:{},
        previewUrl:null
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:this.props.userData.name,
                introduction:this.props.userData.introduction,
                profileImageUrl:this.props.userData.profileImageUrl,
                uid:this.props.userData.uid
            })
        },1000)
    }

    onChangeHandler = e =>{
        const selected = e.target.files[0]
        const imageTypes = ['image/png','image/jpg','image/jpeg']

        let reader = new FileReader();
        reader.readAsDataURL(selected)

        reader.onload = ()=>{
            if(reader.readyState === 2){
                this.setState({previewUrl:reader.result})
            }
        }

        reader.onprogress = e=>{
            console.log(e)
        }
        

        if(selected && imageTypes.includes(selected.type)){
            this.setState({file:selected})
        }
    }

    onInputChangeHandler = e=>{
        const updatedState={...this.state}
        updatedState[e.target.id]=e.target.value;

        this.setState({
            ...this.state,
            ...updatedState,
            profileImageUrl:this.props.userData.profileImageUrl,
            uid:this.props.userData.uid
        })
    }

    submitHandler = e=>{
        e.preventDefault()
        
        this.props.onSubmitUser({...this.state,uid:this.props.userData.uid})
        // this.props.history.goBack();
    }



    render() {
        let imageContent= <img src={this.state.previewUrl} />;

        if(!this.state.profileImageUrl){
            imageContent=<img src={this.props.userData.profileImageUrl}/>
        }


        return (
            <>
            <Backdrop show/>
            
            <div className="edit__profile">
                <div className="heading">
                    <h2>{this.props.userData.name}<span>PRO</span></h2>
                </div>
                {this.props.userData.loading ?
                 <CircleSpinner />:
                <div className="edit__details">
                    <div className="row upload">
                        <div className="image__area">
                            {this.state.previewUrl ?
                                <img src={this.state.previewUrl}/> :
                                <img src={this.props.userData.profileImageUrl} /> }
                        </div>

                        <div className="button__area">
                            <label htmlFor="update-avatar">
                                <p className="btn btn-primary">Upload new picture</p>
                            </label>
                            <p className="btn btn-default">Delete</p> 
                            <input type="file" className="upload__image" id="update-avatar" accept="image/png,image/jpg,image/jpeg"  onChange={this.onChangeHandler}/>
                        </div>
                    </div>

                    <div className="row">
                        {this.state.uid==null ? <Spinner/>:
                        <form className="form" onSubmit={this.submitHandler}>
                            <div className="form__group margin-bottom-md">
                                <label htmlFor="name" className="form__label">Name</label>
                                <input id="name" type="text" className="form__input" value={this.state.name} placeholder="Add a Title" onChange={this.onInputChangeHandler} required />
                            </div>

                            <div className="form__group margin-bottom-md">
                                <label htmlFor="introduction" className="form__label">Bio</label>
                                <textarea type="text" className="form__input-desc" name="size" id="introduction" 
                                    defaultValue={this.state.introduction}
                                    placeholder="Tell us about your process and how you arrived at thui design" onChange={this.onInputChangeHandler}></textarea>
                            </div>

                            <button className="btn btn-primary">Update</button>
                            <button className="btn btn-default" onClick={()=>this.props.history.goBack()}>Cancel</button>
                        </form>}
                    </div>
                </div>}
            </div>
            </>
        )
    }
};

const mapStateToProps = state=>{
    return {
        userData:state.authState
    }
}

const mapDispatchToProps= dispatch=>{
    return {
        onSubmitUser: (data,uid)=>{dispatch(updateUser(data, uid))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
