// import { useState } from "react"
import React, {useState} from "react"
const LoginForm = () =>{

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('')
    // const [pass, setPass] = React.useState('')
    // const [npass, setnpass] = React.useState('')
    // const [state, setState] = React.useState('')
    // in one line it will be wrritten as 
    const [value, setValue] = useState({
        name:'',
        email:'',
        pass:'',
        npass:'',
        state:''
    })
    const [errText, setErrText] = useState('')
    const handleInputChange=(e)=>{
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
        // console.log(e.target)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value.name || !value.email || !value.pass || !value.npass){
            setErrText('some fields are missing')            
        }
        else if(value.name.length < 3){            
            setErrText('name is to small')            
        }else if(value.pass !== value.npass){
            setErrText('password do not match')
        }else{
            setErrText('form submited')
            console.log(value)
        }
    }
    return(
        <form>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Name</span></label>
                <input className="input" name="name" required onChange={handleInputChange} value={value.name} />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Email</span></label>
                <input className="input" required name="email" type="email" onChange={handleInputChange} value={value.email} />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Password</span></label>
                <input className="input" required name="pass" type="password" onChange={handleInputChange} value={value.pass} />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Re enter your password</span></label>
                <input className="input" required  type="password" name="npass" onChange={handleInputChange} value={value.npass} />
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">State</span></label>
                <select value={value.state} name="state" onChange={handleInputChange} >
                    <option value="Madhesh">Madhesh</option>
                    <option value="Bagmati" >Bagmati</option>
                    <option value="karnali">Karnali</option>
                    <option value="Lumbini">Lumbini</option>
                </select>                
            </div>
            <div className="err">{errText}</div>
            <button type="submit" value="Submit" className="button button_wide" onClick={handleSubmit}>Create your account</button>
        </form>
    )
}
export default LoginForm