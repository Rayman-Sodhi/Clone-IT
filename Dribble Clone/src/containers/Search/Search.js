import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchShots} from '../../store/actions/shots';

class Search extends Component {

    searchHandler=(e)=>{
        if(e.key==='Enter'){
            this.props.history.push(e.target.value)
            this.props.onFetchShots(e.target.value,this.props.match.path)
        }
    }


    render() {
        return (
            <>
            <div className="search__container">
                <div className="search__header">
                    <div className="background-bar"></div>
                    <div className="search-results-details">
                        <div className="search__input margin-bottom-md">
                            <i className="fa fa-search"></i>
                            <input className="search__input-field" defaultValue={this.props.match.params.filter} onKeyDown={this.searchHandler}/>
                        </div>
                        <h1 className="search__item-name margin-bottom-sm">{this.props.match.params.filter}</h1>
                        

                        <div className="related__keywords margin-top-md">
                            <ul className="keyword__list">
                                <li className="keyword">Related:</li>
                                <li className="keyword">branding</li>
                                <li className="keyword">logotype</li>
                                <li className="keyword">icon</li>
                                <li className="keyword">identity</li>
                                <li className="keyword">vector</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onFetchShots: (filterText,pathname)=>{dispatch(fetchShots(filterText,pathname))}
    }
}

export default connect(null, mapDispatchToProps)(Search);
