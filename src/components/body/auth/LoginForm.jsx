import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';

const formStyle = {
    position: 'fixed',
    top: '70px',
    right: '30px',
    maxWidth: '650px',
    backgroundColor: '#ebdaf8',
    padding: '3rem',
    borderRadius: '5px'
}

function LoginForm() {

    const [errors, setErrors] = useState([]);
    const [loginData, setLoginData] = useState({email:'', password:''});


    const changeHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([])
        axios({
            method: 'POST',
            url: 'http://localhost:5000/auth/signin',
            data: loginData
        })
            .then((response) => { 
                alert(response.data.message);
            })
            .catch((error) => { 
                setErrors([error.response.data.message]);
             })
    }


    return (
        <div className='border shadow col-md-5 col-sm-5 col-lg-4' style={formStyle}>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form onSubmit={submitHandler}>
                        <p className="text-center display-5 mb-1"><FaUser /></p>
                        <p className="text-center display-6 mb-4">Sign in</p>

                        {/*<!-- Email input --> */}
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" name="email" className="form-control" onChange={changeHandler}
                                pattern=""/>
                            <label className="form-label" htmlFor="loginName">Email</label>
                        </div>
                        {/*<!-- Password input --> */}
                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" name="password" className="form-control" onChange={changeHandler} />
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                        </div>
                        {/*<!-- 2 column grid layout --> */}
                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                {/*<!-- Checkbox --> */}
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck"  />
                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                {/* <!-- Simple link --> */}
                                {/* <a href="#!">Forgot password?</a> */}
                            </div>
                        </div>
                        {/*<!-- Submit button --> */}
                        <button type="submit" className="btn btn-primary btn-block mb-4 px-5">Sign in</button>


                        <div>
                            <ul>
                                {errors.map(error => (
                                    <li className="text-danger">{ error }</li>
                                ))}
                            </ul>
                        </div>

                        {/*<!-- Register buttons --> */}
                        <div className="text-center">
                            <p>Not a member? <Link to="/register">Register</Link></p>
                        </div>
                    </form>
                </div>
                
            </div>
            {/*<!--Pills content--> */}
        </div>
    )
}

export default LoginForm