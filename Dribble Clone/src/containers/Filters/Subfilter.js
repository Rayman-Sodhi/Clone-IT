import React,{ useState} from 'react';
import { CSSTransition } from 'react-transition-group';

const Subfilter = ({ in: inProp }) => {

    const [filterHeight,setFilterHeight] = useState(null)

    const duration = 300;

    const calcHeight=(el)=>{
        const height=el.offsetHeight;
        setFilterHeight(height)
    }

    return (
        <div className="row filter-area ">
            <CSSTransition in={inProp} timeout={duration} mountOnEnter  unmountOnExit classNames="sub-filter" onEnter={calcHeight} >
                <div className="filter__dropdown">
                    <div>
                        <div className="col-1-of-4">
                            <div className="form__group">
                                <label htmlFor="tags" className="form__label">Tags</label>
                                <input id="tags" type="text" className="form__input " placeholder="Search by tag" />
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="form__group">
                                <label htmlFor="title" className="form__label">Title</label>
                                <input id="title" type="text" className="form__input " placeholder="Search by title" />
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="form__group">
                                <label htmlFor="author" className="form__label">Author</label>
                                <input id="author" type="text" className="form__input " placeholder="Search by author" />
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="form__group">
                                <label htmlFor="author" className="form__label">Date</label>
                                <input id="author" type="text" className="form__input " placeholder="Search by author" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Subfilter;
