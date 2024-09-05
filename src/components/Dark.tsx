import { DARK } from '@/constants/ui'
import { DarkLight_Btn } from '@/models/btnProps'

const Dark = ({isSelected,onClick}:DarkLight_Btn) => {
    
  return (
    <div className={`rounded-md text-midnight-blue ${isSelected ? "bg-sky-blue " : ""} text-md font-mono  px-4 py-2  cursor-pointer hover:bg-midnight-blue dark:hover:bg-rose-50`}
   onClick={
    ()=>{
        onClick(DARK)
    }
   }
    >Dark</div>
  )
}

export default Dark