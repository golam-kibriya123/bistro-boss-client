import { useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png';
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null)
    useEffect(() => { loadCaptchaEnginge(6); }, [])

    const [captchaMatch, setCaptchaMatch] = useState(false);


    const captchaCheck = event => {
        event.preventDefault()
        let user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value) == true) {
            alert("ok")
            setCaptchaMatch(true)
        }

        else {
            alert('not ok')
            setCaptchaMatch(false)
        }
    }

    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        console.log(email, password)

    }
    return (
        <div className='  bg-login-bg bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center h-screen '>

            <div className="hero  bg-login-bg   w-[80%]  md:h-[90vh] ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="md:w-1/2 ">
                        <form className="card-body" onSubmit={handelSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input focus:outline-none focus:border-[#D1A054] " name='email' />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input focus:outline-none focus:border-[#D1A054]    " name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control relative mb-6">
                                <div className='input'>
                                    <LoadCanvasTemplate />

                                </div>


                            </div>

                            <div className="form-control relative">
                                <input type="text" ref={captchaRef} placeholder="type here" className={`input focus:outline-none focus:border-[#D1A054]  ${captchaMatch && "btn-disabled "} bg-[#fc191952] `} name='captcha' />
                                <button className={`absolute right-0 btn rounded-s-none bg-[#d19f54d4] hover:bg-[#D1A054] outline-none border-0  bg-red-500 ${captchaMatch && "btn-disabled bg-green-500 text-white"} `} onClick={captchaCheck}>{captchaMatch ? ' Captcha Checked Done' : 'Check First'}</button>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className={`${captchaMatch || "btn-disabled  bg-[#be9e6dd4]"} btn bg-[#d19f54d4] hover:bg-[#D1A054] outline-none border-0 bg-[#D1A054]  `}>Login</button>
                            </div>
                        </form>

                    </div>
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={loginImg} alt="" className='' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;