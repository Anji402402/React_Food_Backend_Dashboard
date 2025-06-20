import React,{useState} from "react";
import { API_URL } from "../../data/apiPath";
const Register = ({showLoginHandler}) => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState("");
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await fetch(`${API_URL}/vendor/register`,{
        method:'Post',
        headers:{
          'Content-Type' :'application/json'
        },
        body: JSON.stringify({username, email, password})
      })
      const  data = await response.json()
      if(response.ok)
        console.log(data)
      setUsername("");
      setEmail("");
      setPassword("");
      alert("vendor registered success") 
      showLoginHandler() 
    } catch (error) {
      console.log("restration failed",error)
      alert("vendor registered failed")
      
    }
  }
  return (
     <div className='registerSection'>
           <form className='authFrom' onSubmit={handleSubmit}>
         <h3>Vendor Register</h3>
         <label>UserName</label>
         <input type='text'name='username' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='enter your name'/><br/>
         <label>Email</label>
         <input type='text'name='email'value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/><br/>
         <label>Password</label>
         <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password'/><br/>
         <div className='btnSubmit'>
          <button type="submit">Submit</button>
         </div>
     </form>
   </div>
 )
};
export default Register;
