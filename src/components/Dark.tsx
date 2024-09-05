import { DARK } from '@/constants/ui'
import { DarkLight_Btn } from '@/models/btnProps'

const Dark = ({isSelected,onClick}:DarkLight_Btn) => {
    
  return (
    <div className={`rounded-md ${isSelected ? "bg-btnColor1" : ""} text-md font-mono  px-4 py-2  cursor-pointer hover:bg-btnColor2`}
   onClick={
    ()=>{
        onClick(DARK)
    }
   }
    >Dark</div>
  )
}

export default Dark