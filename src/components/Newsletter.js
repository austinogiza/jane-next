import axios from 'axios'
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { newsletter } from '../constants'
import { submitButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { H2,Small } from '../styles/TextStyles'
import Loading from './Loading'
import 'react-toastify/dist/ReactToastify.css';
import SuccessNotifications from './SuccessNotification'
import FailedNotification from './FailedNotification'



const Newsletter = () => {

    const initial = {
        email: "",
    }



    const [form, setForm] = useState(initial)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess]= useState(null)
    const [error, setError]= useState(null)
    const [timer, setTimer]= useState(5)



    const{
        email
    } =form;
    const onSubmit = e =>{
        e.preventDefault();
        setLoading(true);
        axios
        .post(newsletter, 
            {email})
        .then(res=>{
    
  
            setSuccess(res.data.message)
        setForm(initial)
        setLoading(false)

        })
        .catch(error=>{
            setError(error.response.data.message)
            setLoading(false)


        })



    }

    const onchange = e=>{
        const {name, value} = e.target;
        setForm({...form, [name]: value});
       
    }

    
    useEffect(()=>{
     
window.setInterval(()=>{
            setTimer(timer=>timer-1)
                       }, 1000)
if(timer === 0){
                        setError(null)
                        setSuccess(null)
                    } 
                

        
    }, [timer])
    return (

       
       <Newslettercover>
{success && <SuccessNotifications text={success} title="Success"/>}
{error && <FailedNotification text={error} title="Error"/>}
<Newlettertitle><Newstext>Join Our List</Newstext>

<Newstextp>For amazing fashion tips and sales(I know you love sales)</Newstextp></Newlettertitle>

<Newsformcontainer>

<Newsletterform onSubmit={onSubmit}>

<Newsinput placeholder="Email Address" required type="email" value={email} onChange={onchange} name="email">

</Newsinput> <Newsbutton type="submit">{loading ? <Loading/>: "Join" }</Newsbutton>
</Newsletterform>
</Newsformcontainer>

       </Newslettercover>
    )
}

const Newslettercover = styled.div`
height: 500px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: ${themes.offWhite};
padding: 10px 25px;
`

const Newlettertitle = styled.div`
height: 40px; 
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:32px 0;
text-align: center;
`
const Newstext = styled(H2)`
margin: 8px 0;
`
const Newstextp = styled(Small)`
color: ${themes.grey}
`
const Newsformcontainer = styled.div`
width: 100%;
height: 50px;
max-width: 800px;
margin: 16px auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`
const Newsletterform = styled.form`
display: flex;
width: 100%;
max-width: 400px;
height: 100%;
flex-direction: row;
justify-content: center;
align-items: center;`
const Newsinput = styled.input`
height: 54px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;

::placeholder{
        font-size: 15px;
        color: #cccccc;
        text-transform: capitalize;
}

:active,:focus,:hover{
    border: 2px solid ${themes.jane};
    outline: none;
}
`
const Newsbutton = styled(submitButton)`
width: 130px;
margin: 10px;

`
export default Newsletter
