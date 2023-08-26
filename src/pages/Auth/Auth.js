import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import  './auth.css'
import logo from '../../img/logo.png'
import { login, signup } from '../../actions/authActions'

const Auth = () => {
    const initialValues = {
        firstname:"",
        lastname:"",
        username:"",
        password:"",
        cnfpassword:""
    }
    const [isSignedUp, setIsSignedUp] = useState(true)
    const [formValues, setFormValues] = useState(initialValues)
    const [passMatch, setPassMatch] = useState(true)

    const dispatch = useDispatch()
    const loading = useSelector(state => state.authReducer.loading)

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormValues({...formValues,[name]:value})
    }

    const handleSubmit = e =>{
        e.preventDefault();

        const {password, cnfpassword} = formValues;
        if(!isSignedUp){
           password === cnfpassword ? dispatch(signup(formValues)):setPassMatch(false)
        }
        else{
            dispatch(login(formValues))
        }
    }

    const toggleSignup = () =>{
        setIsSignedUp(prev=>!prev)
        setPassMatch(true)
        setFormValues(initialValues);
    }
  return (
    <div className='auth'>
        {/* left side */}
        <div className='a-left'>
            <img src={logo} alt=''/>
            <div className='app-name'>
                <h1>BeSocial</h1>
                <h6>Explore people around the world</h6>
            </div>
        </div>

        {/* right side */}
        <div className='a-right'>
            <form className='info-form auth-form' onSubmit={handleSubmit}>
                <h3>{isSignedUp?"Login":"Signup"}</h3>
                {!isSignedUp && (
                    <div>
                        <input type='text'placeholder='First Name' className='info-input' name='firstname' value={formValues.firstname} onChange={handleChange} required/>

                        <input type='text'placeholder='Last Name' className='info-input' name='lastname' value={formValues.lastname} onChange={handleChange} required/>
                    </div>

                )}
                
                <div>
                    <input type='text'placeholder='Username' className='info-input' name='username' value={formValues.username} onChange={handleChange} required/>
                </div>

                <div>
                    <input type='password'placeholder='Password' className='info-input' name='password' value={formValues.password} onChange={handleChange} required/>
                    {!isSignedUp && (
                        <input type='password'placeholder='Confirm Password' className='info-input' name='cnfpassword' value={formValues.cnfpassword} onChange={handleChange} />
                    )}
                </div>
                    <span style={{display:passMatch?"none":"block", fontSize:'12px',color:'red',marginRight:'3px',alignSelf:'flex-end' }}>*Passwords dont match</span>
                <div>
                    <span style={{fontSize:"15px",cursor:'pointer'}} onClick={toggleSignup}>{isSignedUp?"Don't have an account? Signup!":"Already have an account? Login!"}</span>
                </div>
                <button className='button info-button' type='submit' disabled={loading}>{loading?"Loading...":isSignedUp?"Login":"Signup"}</button>
            </form>
        </div>
    </div>
  )
}


export default Auth