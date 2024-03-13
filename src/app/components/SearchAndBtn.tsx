import React from 'react'
import { IoSearch } from "react-icons/io5";
type Props = {
    value: string;
    onChange:React.ChangeEventHandler<HTMLInputElement>;
   
    onSubmit:React.FormEventHandler<HTMLFormElement> ;
}

const SearchAndBtn = (props: Props) => {
  return (
   <form onSubmit={props.onSubmit} className=' rounded-lg flex items-center gap-2 w-full shadow-md focus-within:ring-2 
   dark:focus-within:ring-gray-200 focus-within:ring-gray-800 p-1'>
    <section  className='flex w-full items-center h-full gap-2'>
    <IoSearch className='text-2xl mx-1 text-blue-500' />
       <input value={props.value}
       onChange={props.onChange}
       placeholder='Search Github Username...'
       type="text" className='w-full h-[40px] rounded-lg bg-inherit outline-none text-sm px-1' />
    </section>
    <button className='rounded-lg bg-blue-500 px-5 py-2 text-white hover:opacity-80 transition-all'>Search</button>
        </form>
  )
}
export default SearchAndBtn