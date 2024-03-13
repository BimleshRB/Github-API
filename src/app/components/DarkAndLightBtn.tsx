"use client"
import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from 'next-themes'
import { IoMoon } from "react-icons/io5";

type Props = {}

export default function DarkAndLightBtn({}: Props) {
  const { resolvedTheme, setTheme } = useTheme()
function toggleTheme(){
  if(resolvedTheme === "light"){
    setTheme("dark")
  }
  if(resolvedTheme === "dark"){
    setTheme("light")
  }

}
  return (
    <div className='flex items-center gap-2' onClick={toggleTheme}>
        <p className='text-sm '>
          {resolvedTheme === "Light" ? "DARK":"LIGHT"}</p>


          <button className='text-2xl cursor-pointer'>
 {resolvedTheme === "Light" ? <IoMoon className='text-xl cursor-pointer'   />: <IoSunnyOutline />}
       
          </button>
         
    </div>
  )
}