 import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../Slice/counterSlice"

 const Parent = () => {

 const data = useSelector ((state)=> state.counter.value)

  const dispathc =useDispatch()
 console.log(data)
  return (
   <>
   <div className="flex gap-[20px] justify-center items-center min-h-screen bg-[#f19142]">
  <button onClick={()=>dispathc(decrement())} className='text-xl font-bold text-black border-2 w-[100px] h-[50px] text hover: bg-[#E02401]'>remove</button>
 <h1 className='text-4xl font-bold'>{data}</h1>
 <button onClick={()=>dispathc(increment())} className='text-xl font-bold text-black bordeer-2 border-2 w-[100px] h-[50px] text hover: bg-[#E02401]'>Add</button>
 </div>

   </>
  )
}

export default Parent
