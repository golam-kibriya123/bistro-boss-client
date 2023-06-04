import { useContext } from 'react';
import loginImg from '../../assets/others/authentication2.png';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
const SignUp = () => {
    const { createUserWithMailAndPass, auth } = useContext(AuthContext);
    const update = (name) => {
        updateProfile(auth.currentUser, {
            displayName: `${name}`
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            console.log(error)
        });
    }

    const handelSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const passWord = form.passWord.value;
        const name = form.name.value;
        console.log(email, passWord, name);
        createUserWithMailAndPass(email, passWord)
            .then((userCredential) => {
                update(name)
                // Signed in
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }
    return (
        <div className='  bg-login-bg bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center md:h-screen '>

            <div className="hero  bg-login-bg   w-[80%]  md:h-[90vh] ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="md:w-1/2 ">
                        <form className="card-body" onSubmit={handelSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input focus:outline-none focus:border-[#D1A054] " name='name' />
                            </div>
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




                            <div className="form-control mt-6">
                                <button type='submit' className={` btn bg-[#d19f54d4] hover:bg-[#D1A054] outline-none border-0 bg-[#D1A054]  `}>Login</button>
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

export default SignUp;