/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

const BannerSuccess =({words})=> {

    const [show, setShow] = useState(true)

    const [timer, setTimer]= useState(5)

    useEffect(()=>{

window.setInterval(()=>{

setTimer((timer)=> timer - 1)
}, 1000)

if(timer === 0 ){

    setShow(false)
}
    }, [timer])
  return (
    <div className="relative bg-green-600"
       show={show}
    >
      <div className="mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
          
            <span className="hidden md:inline">{words}</span>
            <span className="block sm:ml-2 sm:inline-block">
            
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}


export default BannerSuccess