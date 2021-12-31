import React from 'react'
import Backdrop from '../Backdrop/Backdrop';
import { Transition, animated } from 'react-spring/renderprops';

const Details = (props) => {
    console.log(props)
    let date=new Date(props.shotItem.createdAt.toDate());
    return (
            <>

            <Transition
            native
            items={props.show}
            from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
            enter={[{ height: 'auto' }]}
            leave={{ height: 0 }}>
            {show =>
                props.show && (prop => <animated.div style={prop} props={props.shotItem}>

<div className="details__container" >
                    <h2 className="details__heading margin-bottom-sm">Shot Details</h2>
                    <p className="date__section margin-bottom-md">Posted on {date.getDate()+'/'+date.getMonth() + '/' + date.getFullYear()}</p>
                    <div className="stat__area margin-bottom-md">
                        <table className="stat__area-table">
                            <thead>
                                <tr>
                                    <th>Views</th>
                                    <th>Likes</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>50374</td>
                                    <td>{props.shotItem.shotDetails.userLiked.length}</td>
                                    <td>{props.shotItem.comments.length}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tag__area">
                        <p className="margin-bottom-sm">Tags</p>
                        <ul className="tag__lists">
                            {props.shotItem.shotDetails.tags.map(tag=>(
                                <li className="tag" key={Math.random()}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>


                </animated.div>)
            }
            </Transition>
                <Backdrop show={props.show} clicked={props.clicked}/>
            </>
    )
}

export default Details;
