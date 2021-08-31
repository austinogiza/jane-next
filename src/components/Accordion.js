import { motion } from 'framer-motion'
import React from 'react'
import { PlusIcon, MinusIcon} from '@heroicons/react/outline'


const Accordion = ({active, title, text, onClick}) => {
    return (
        <div   onClick={onClick} className=' my-3 border-b-2 border-black py-4 px-3'>
    
    
    <div className='cursor-pointer flex flex-row justify-between '>
    <span><h1 className=' font-medium text-xl text-black'>{title}</h1></span>
    <motion.span     
    animate={{ y:0 }}
    transition={{ duration: 1 }}>
        {active ?
            <MinusIcon className="h-6 w-6 text-black cursor-pointer"/>
        :
    
        <PlusIcon  className="h-6 w-6 text-black cursor-pointer"/>
        }
    </motion.span>

    </div>
           <motion.p     
           animate={{ y:0,scale: 1 }}
           transition={{duration:1 }}
    className={`font-normal text-base my-2 text-gray-500 ${active ? "flex": "hidden"}`}>{text}</motion.p> 
        </div>
    )
}

export default Accordion
