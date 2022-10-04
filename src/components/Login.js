import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate  } from "react-router";
import img from "../asset/img/login-2.png"
import { useState } from 'react';
const LoginApi = () => {
    const history = useNavigate ()
const{register,handleSubmit,watch,formState: { errors }} = useForm()
const [errorState,setErrorState] = useState(false)
const onSubmit =(data)=> {
    console.log(data,"test")
    axios.post("https://dummyjson.com/auth/login", {
   username: data.userName,
   password: data.Password
 }
).then(res=>res.status === 200 ? 
   ( localStorage.setItem("tokenData",res.data.token),
history("/test")) : setErrorState(true),  null).catch(error=>setErrorState(true))}
    return (
        <div className='main-form-login'>
            <div className='img-login'>
<img src={img}alt="Login-img"/>
            </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input  defaultValue="test" {...register("userName", { required: true})}  aria-invalid={errors.userName ? "true" : "false"} />
            {errors.userName && <p role="alert">نام کار بری خالی است</p>}
            <input id="Password"  type="Password" {...register("Password", { required: true })} aria-invalid={errors.Password ? "true" : "false"} />
            {errors.Password && <span role="alert">پسورد اشتباه است</span>}
            <input type="submit"/>
          {errorState ? <div className='error-message'>

          <p>نام کاربری یا رمز عبور اشتباه است</p>
          </div> : null}
        </form>
        
        </div>
        )
}

export default LoginApi