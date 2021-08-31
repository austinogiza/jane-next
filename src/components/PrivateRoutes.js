
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {Route, Redirect, useLocation} from 'react-router-dom'



const PrivateRoutes = ({component:Component, authenticated, ...rest}) => {
 const [redirect, setRedirect] = useState(false)

    const location = useLocation()



    useEffect(()=>{

    }, [authenticated])

    if(redirect){
      return <Redirect exact to={{pathname: '/login', state: {next: location.pathname}}}/>
    }
    return (
      <Route {...rest} render={props =>{
        if(!authenticated){
          setRedirect(true)
          }
          else{
            
            return <Component {...props}/>
            
            
            }}}/> 
    )
}


const mapStateToProps = state =>{
  return {
    authenticated: state.auth.token !== null,
    loading: state.auth.loading,

  }
};

const mapDispatchToProps = dispatch =>{
    return{
   
      loginMessage: () => dispatch()
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes)

