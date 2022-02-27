import React from 'react'
import './login.css'
import image from './image.png'
import axios from "axios";


export default class Login extends React.Component { 



  state = {
    email: "",
    password: ""
  };

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("https://reqres.in/api/login", data,{
        headers:{
          'token':'QpwL5tke4Pnpja7X4'
        }
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(data.email === "" && data.password === "" ? "error : missing email and password" : "" || data.password === "" ? "error : missing password" : "error : missing email")
      )


      
      
         
  
      };


render(){
  return (
    <div className='l'>
    
<div className='l-form'>
            <h1>Welcome Back</h1>
            <p>sub-title text goes here</p>
<form method='POST' onSubmit={this.handleSubmit}>
    <input id='input-text' type="text"  value={this.state.email}
            onChange={this.onEmailChange} placeholder="Email Address*" size="40" />
    <input id='input-psw' type="password" value={this.state.password} onChange={this.onPasswordChange} placeholder="Password*" size="40" /><br/>
   <input id='input1' type="submit" value="Login" size="40" />
   <br/>
   

   <div>
     
      <input id='checkbox' type="checkbox" value="Remember Password" />Remember Password<span id='fp'>Forgot password?</span>
   </div>
   
</form>

 </div>

       
        <div className='i-img'>
        <img id='img1' src={image} alt="" />
        </div> 
        
    
    </div>
  )
}
}
