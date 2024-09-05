"use client"
import { DARK, LIGHT } from '@/constants/ui'
import React, { useEffect, useState } from 'react'
import Dark from './Dark'
import Light from './Light'

const ThemeBtns = () => {
    const [selectedTheme,setSelectedTheme]=useState(DARK)

      // Toggle theme based on the selected theme
  useEffect(() => {
    if (selectedTheme === DARK) {
      document.documentElement.classList.add('dark'); // Apply dark mode
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark mode
    }
  }, [selectedTheme]);
  
    return (
  <div className='mt-2 lg:mt-0'>
        <div className=" rounded-lg  flex gap-2  dark:text-almost-white     "
      >
          <Dark isSelected={selectedTheme===DARK} onClick={setSelectedTheme} />
          <Light isSelected={selectedTheme===LIGHT}  onClick={setSelectedTheme} />
      </div>
  </div>
    )
}

export default ThemeBtns