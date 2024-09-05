import { LIGHT } from '@/constants/ui'
import { DarkLight_Btn } from '@/models/btnProps'
import React from 'react'

const Light = ({ isSelected, onClick }: DarkLight_Btn) => {
    
    return (
        <div className={`rounded-md dark:text-card-text  ${isSelected ? "bg-button-background   dark:bg-dark-btnColor1" : ""} text-md font-mono px-4 py-2  cursor-pointer  hover:bg-button-background `}

            onClick={() => {
                onClick(LIGHT)
            }}

        >Light</div>

    )
}

export default Light