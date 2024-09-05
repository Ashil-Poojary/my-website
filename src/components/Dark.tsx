import { DARK } from '@/constants/ui'

const Dark = ({isSelected,onClick}:DarkLight_Btn) => {
    
  return (
    <div className={`rounded-md ${isSelected ? "bg-slate-300" : ""} text-md font-mono  px-4 py-2  cursor-pointer hover:bg-slate-100`}
   onClick={
    ()=>{
        onClick(DARK)
    }
   }
    >Dark</div>
  )
}

export default Dark