import './Register.css'
import React, { Component } from 'react'

export default class Register extends Component {
constructor(props) {super(props)
this.state={name:"",lastname:"",email:"",password:"",confirm:"",checkbox:""}
}  

logUser=(e)=>{
e.preventDefault()
const {name,lastname,email,password,confirm,checkbox}=e.target
console.log(name.value,lastname.value,email.value,password.value,confirm.value,checkbox.checked);  
} 
authUserInput=()=>{
const {name,lastname,email,password,confirm,checkbox}=this.state 
if( name.length >= 6 &&
lastname.length >= 6 &&
email.length >= 6 &&
password.length >= 6 &&
confirm === password &&
checkbox === true)
{return true} 
return false
}
changeName=(e)=>{this.setState({name:e.target.value})}
changeLastName=(e)=>{this.setState({lastname:e.target.value})}
changeEmail=(e)=>{this.setState({email:e.target.value})}
changePassword=(e)=>{this.setState({password:e.target.value})}
changeConfirm=(e)=>{this.setState({confirm:e.target.value})}
changeCheck=(e)=>{this.setState({checkbox:e.target.checked})}
render(){
const {name,lastname,email,password,confirm}=this.state
const nameStyle = {color:name.length >= 6 ? "green" : "red"}
const lnameStyle = {color:lastname.length >= 6 ? "green" : "red"}
const emailStyle = {color:email.length >= 6 ? "green" : "red"}
const passStyle = {color:password.length >= 6 ? "green" : "red"}
const confirmStyle = {color:confirm.length >= 6 ? "green" : "red"}

const submitDisabled=!this.authUserInput()
console.log(this.authUserInput());
return (     
<>           
<h1>Register</h1>
<p>create account</p>
<form className="form" onSubmit={this.logUser}>
<input className="name" type="text" placeholder="NAME" name="name"  onChange={this.changeName} style={nameStyle} required/>
<input className="name" type="text" placeholder="LAST NAME" name="lastname"onChange={this.changeLastName} style={lnameStyle}required/>
<input  type="text" placeholder="E-MAIL"name="email" onChange={this.changeEmail} style={emailStyle}required/>    
<input  type="password" placeholder="PASSWORD" name="password"onChange={this.changePassword} style={passStyle}required/>
<input  type="password" placeholder="CONFIRM PASSWORD"name="confirm" onChange={this.changeConfirm} style={confirmStyle}required/>
<input type="checkbox" name="checkbox" className="check"onChange={this.changeCheck}required/>
<label htmlFor="checkbox"  > i accept
</label>
<input className="submit" type="submit" value="Register" disabled={submitDisabled}/>
</form>
</>    

)}}    

    
    
      







    
         
      
    

