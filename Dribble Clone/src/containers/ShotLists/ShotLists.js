import React,{Component} from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import { fetchShots } from '../../store/actions/shots';

class ShotLists extends Component {

    componentDidMount(){
        this.props.onFetchShots(this.props.match.params.filter, this.props.match.path)
    }



    render(){
        let rowContents = [];
        let contents = this.props.shotLists.reduce((acc, shot, i) => {
            
            rowContents.push(<Card key={shot.id} shot={shot} />);
            if (i % 4 === 3) {
                acc.push(<div className="row" key={Math.random()}>{rowContents}</div>);
                rowContents = [];
            }
            return acc;
        },[])

        contents.push(<div className="row" key={Math.random()}>{rowContents}</div>);

        return (
            <div className="container margin-bottom-md">
                <section className="content__area">
                    {this.props.loading ? <Spinner />:contents}
                </section>
            </div>
        )
    }
  
}

const mapStateToProps = state=>{
    return {
        shotLists: state.shotsState.shots,
        loading: state.shotsState.loading
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onFetchShots: (filter,pathname)=>dispatch(fetchShots(filter,pathname))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShotLists);
