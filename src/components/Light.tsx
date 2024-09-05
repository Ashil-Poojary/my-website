import { LIGHT } from '@/constants/ui'
import { DarkLight_Btn } from '@/models/btnProps'
import React from 'react'

const Light = ({ isSelected, onClick }: DarkLight_Btn) => {
    
    return (
        <div className={`rounded-md ${isSelected ? "bg-btnColor1" : ""} text-md font-mono px-4 py-2  cursor-pointer  hover:bg-btnColor2`}

            onClick={() => {
                onClick(LIGHT)
            }}

        >Light</div>

    )
}

export default Light