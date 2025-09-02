"use client"

import { useState } from "react"

export default function Modal(){

    const[modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <div>
            <div onClick={toggleModal} className="p-4 bg-gray-400 px-6">
                <h1>aa</h1>
            </div>

            {modal &&(<div className="bg-[#2a2a2ac0] h-full top-0 right-0 left-0 bottom-0 text-center fixed flex items-center">
                <div className="bg-white p-10 w-[30%] h-full">
                    <h1 className="text-black">aqui tem um modal</h1>
                    <button onClick={toggleModal} className="p-3 w-32 mt-4 bg-gray-200">
                        <p>close</p>
                    </button>
                </div>
            </div>)}
        </div>
    )
}