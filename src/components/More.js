import React from 'react'
import styled from 'styled-components'
import { mainButton } from '../styles/Button'

const More = ({img, title}) => {
    return (
        <div className=" max-w-lg w-full  my-4 h-120 py-4 px-6 bg-cover flex flex-col justify-end bg-black bg-opacity-20" style={{backgroundImage: `url(${img})`}}>

<div className='flex flex-col mb-12'>
<h1 className=' my-4 text-white font-medium text-2xl'>{title}</h1>
        <ShopButton to='/shop'>Shop now</ShopButton>
</div>
            
        </div>
    )
}


const ShopButton = styled(mainButton)``
export default More
