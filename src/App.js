
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './component/signIn';
import SignUp from './component/signUp';
import Account from './component/account';
import Home from "./component/home"
// import { useNavigate } from 'react-router-dom';
// import {Link } from 'react-router-dom';
import { useState } from 'react';
import "./App.css"

function App() {
  // const navigate = useNavigate()
  const [active, setActive] = useState("")
  const changeHandler=(val)=>{
    setActive(val)
  }
  return (
    <div  >
      {/* <h1>Welcome to PopX</h1>
      <p>Loreum ipsump dolor sit ammet</p>
      <p>Loreum ipsump dolor sit ammet</p>
    
      <Button onClick={()=>setActive("SignUp")} style={{backgroundColor:"blueviolet"}}>Create Account</Button><br></br><br></br>

      <Button onClick={()=>setActive("SignIn")} style={{backgroundColor:"grey"}}>Already Registerted? Login</Button><br></br><br></br> */}

      <div>
        {active === "" && <Home changeHandler={changeHandler}/>}
        {active === "SignIn" &&  <SignIn /> }
        {active === "SignUp" &&  <SignUp /> }
        {active === "Account" && <Account /> }

      </div>

    </div>
  );
}

export default App;
