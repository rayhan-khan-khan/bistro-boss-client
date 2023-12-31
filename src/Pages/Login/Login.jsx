import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log('state in location login page', location.state)
  useEffect(() =>{
    loadCaptchaEnginge(6); 
  },[])

    const handleLogin = evant => {
        evant.preventDefault();
        const form = evant.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        
        .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: 'User Login Successful.',
            showClass:{
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
          navigate(from, { replace: true});
        })

      }

    const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      
      if (validateCaptcha(user_captcha_value)) {
       setDisabled(false)
      }
      else{
        setDisabled(true)
      }
    }


    return (
       <>
          <Helmet>
               <title>Bistro Boss | Login</title>
             </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card md:w-[800px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha} type="type" name="captcha" placeholder="type the text captcha about" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                {/* Todo apply disabled for re capcha */}
                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='ml-8 mb-5'><small>new here? <Link className='text-orange-500' to='/signup'>Create an account</Link></small></p>
          </div>
        </div>
      </div>
       </>
    );
};

export default Login;