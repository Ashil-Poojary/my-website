"use client"
import { DARK, LIGHT } from '@/constants/ui'
import React, { useState } from 'react'
import Dark from './Dark'
import Light from './Light'

const ThemeBtns = () => {
    const [selectedTheme,setSelectedTheme]=useState(DARK)
    return (
  <div className='mt-2 lg:mt-0'>
        <div className=" rounded-lg   flex gap-2     "
      >
          <Dark isSelected={selectedTheme===DARK} onClick={setSelectedTheme} />
          <Light isSelected={selectedTheme===LIGHT}  onClick={setSelectedTheme} />
      </div>
  </div>
    )
}

export default ThemeBtns