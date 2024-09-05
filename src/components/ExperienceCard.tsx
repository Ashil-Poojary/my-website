import {  WorkExperience, workExperiences } from '@/constants/workExperience';
import { calculateTotalExperience } from '@/util/calculateExperience';
import React from 'react'

const ExperienceCard = () => {
    const totalExperience = calculateTotalExperience(workExperiences);

    const dataCard=(exp:WorkExperience)=>{
return (


    <div className='flex justify-between text-card-text dark:text-dark-text-color2'>

        <h4 >{exp.designation}</h4>
        <h1>{exp.companyName}</h1>

    </div>
)
    }

    return (
        <div className='rounded-lg bg-card-background dark:bg-dark-accent px-4 py-2  mt-2'>
            <p className='text-card-text'>{` ${totalExperience.totalYears}.${totalExperience.remainingMonths} years  `}</p>
            <h3 className='text-3xl font-mono font-semibold text-card-text dark:text-dark-text-color2'>Experience</h3>
            {
                workExperiences.map(data=>{
                    return dataCard(data)
                })
            }

        </div>
    )
}

export default ExperienceCard