import Image from 'next/image'
import React from 'react'
import child from '../../img/children.png'
export default function Children() {
    return (
        <div className="text-white bg-black py-16 px-4 xs:px-8sm:px-16 md:px-24 lg:px-36 flex flex-col lg:flex-row items-center">
            <div className="transform hover:scale-110 animation cursor-pointer mr-10">
                <Image src={child} alt="" />
            </div>
            <div>
                <p className="text-center lg:text-left text-4xl lg:text-5xl font-bold">Create profiles for children.</p>
                <p className="text-center lg:text-left text-base sm:text-xl lg:text-2xl font-semibold mt-5">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
    )
}
