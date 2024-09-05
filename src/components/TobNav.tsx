"use client"

import { tabProp, tabType, TopBarProps } from "@/models/btnProps"

interface TopNavProps{
  selectedTab:tabProp,
  onTabClick:(tab:tabProp)=>void
}

const TobNav = ({selectedTab,onTabClick}:TopNavProps) => {
  return (
   <div className="flex justify-center ">
     <div className=" flex gap-2 text-center justify-center items-center  font-mono font-bold bg-btnColor1  dark:bg-dark-btnColor1 text-text-color2 px-1 py-1 rounded-3xl">
      <div className={`rounded-3xl font-semibold px-4 py-2  dark:text-white  cursor-pointer   ${selectedTab===tabProp.ALL?"bg-btnColor2  dark:bg-dark-btnColor2   ":""}`}
      
      onClick={()=>{
        onTabClick(tabProp.ALL)
      }}
      >
        All
      </div>
      <div className={`rounded-3xl font-semibold px-4 py-2 dark:text-white   cursor-pointer ${selectedTab===tabProp.PROJECTS?"bg-btnColor2 dark:bg-dark-btnColor2":""}`}
      
      
      onClick={()=>{
        onTabClick(tabProp.PROJECTS)
      }}
      >
        Projects
      </div>
      <div className={`rounded-3xl font-semibold px-4 dark:text-white   py-2 cursor-pointer  ${selectedTab===tabProp.ABOUT?"bg-btnColor2 dark:bg-dark-btnColor2":""}`}
      
      onClick={()=>{
        onTabClick(tabProp.ABOUT)
      }}>
        About
      </div>
    </div>
   </div>
  )
}

export default TobNav