export interface DarkLight_Btn{
    isSelected:boolean
    onClick:(str:string)=>void
}


export enum tabProp{
ALL,
PROJECTS,
ABOUT
}
export type tabType = typeof tabProp
export interface TopBarProps{
    selectedTab: tabType
}