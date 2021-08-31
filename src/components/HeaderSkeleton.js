import React from 'react'
import styled, {keyframes} from 'styled-components'

const HeaderSkeleton = () => {
  return (
   <Skel>

     <Skelsmall/>

 <Shimmer/>
   </Skel>
  )
}

const loading = keyframes`
0% {
  transform: translateX(-150%);
}
50%{
  transform: translateX(-60%);
}
100%{
  transform: translateX(150%);
}
`
const Skel = styled.div`
width: 100%;
min-height: 100px;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;

`


const Shimmer = styled.div`
position: absolute;
animation: ${loading} 2s infinite;
top: 0;
width: 100%;
height: 100%;
left: 0;
transform: skew(-20deg);
background: rgba(255,255,255,0.8);
`

const Skelsmall = styled.div`
background: #ddd;
margin: 4px 0;
width: 100%;
height: 30px;
`


export default HeaderSkeleton
