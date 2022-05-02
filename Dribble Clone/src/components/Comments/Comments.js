import React,{Component} from 'react';
import Comment from './Comment/Comment';




class Comments extends Component{

    componentDidMount(){
        console.log("comments mounted")
    }
    
    render(){
        return (
            <div className="comments">
                {this.props.comments.map(comment=>(
                    <Comment key={Math.random()} comment={comment}/>
                ))}
            </div>
        )
    }
}

export default Comments;
