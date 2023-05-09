import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Home({changeHandler}) {
    const [active, setActive] = useState()
    const changePage=(props)=>{
        
        setActive(props)
        changeHandler(props)
    }
    return (
        <div className='App'>
                 <h1>Welcome to PopX</h1>
        <p>Loreum ipsump dolor sit ammet</p>
        <p>Loreum ipsump dolor sit ammet</p>
        
            <Button onClick={()=>changePage("SignUp")} style={{backgroundColor:"blueviolet"}}>Create Account</Button><br></br><br></br>

            <Button onClick={()=>changePage("SignIn")} style={{backgroundColor:"grey"}}>Already Registerted? Login</Button><br></br><br></br>

            <button onClick={()=>changePage("Account")}>Account Setting</button>

        </div>
    )

}

export default Home;