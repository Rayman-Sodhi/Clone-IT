import React from 'react'

const Button = (props) => {

    const disabled=props.disabled ? true:false;

    switch(props.btnType){

        case 'default':
            return (<button className="btn btn-default" onClick={props.clicked} disabled={disabled}>{props.children}</button>)

        case 'primary':
            return (<button className="btn btn-primary" onClick={props.clicked} disabled={disabled}>{props.children}</button>)

        default:
            return (<button className="btn btn-default" onClick={props.clicked} disabled={disabled}>{props.children}</button>)

    }
}

export default Button;