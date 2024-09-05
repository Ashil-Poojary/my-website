import { LIGHT } from '@/constants/ui'
import React from 'react'

const Light = ({ isSelected, onClick }: DarkLight_Btn) => {
    
    return (
        <div className={`rounded-md ${isSelected ? "bg-slate-300" : ""} text-md font-mono px-4 py-2  cursor-pointer  hover:bg-slate-100`}

            onClick={() => {
                onClick(LIGHT)
            }}

        >Light</div>

    )
}

export default Light