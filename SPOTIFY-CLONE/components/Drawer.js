import React, { useRef } from 'react'

export default function Drawer({open, setOpen, component}) {
    const drawerRef = useRef(null)
    const handleClick = e=>{
        if(drawerRef.current === e.target){
            setOpen(false)
        }
    }
    if(open)
    return (
        <div ref={drawerRef} className="animate__animated animate__fadeIn text-white h-screen w-screen absolute top-0 left-0 bg-[#000000b6]" onClick={handleClick} >
            <div className="bg-black w-[12rem]">
            {component}
            </div>
        </div>
    )
    else return null
}
