import React, {useState} from 'react';
import axios from 'axios';
import { FaUserPlus } from 'react-icons/fa';

const formStyle = {
    position: 'fixed',
    top: '70px',
    right: '30px',
    maxWidth: '650px',
    backgroundColor: '#ebdaf8',
    padding: '3rem',
    borderRadius: '5px'
}

function RegisterForm() {

    const [errors, setErrors] = useState([]);

    const submitHandler = function (e) {
        e.preventDefault();
        setErrors([]);
        const fd = new FormData(e.target);
        const user = Object.fromEntries(fd.entries());
        console.log('test')
        axios({
            url: 'http://localhost:5000/auth/signup',
            method: 'POST',
            data: user
        })
            .then(res => {
                console.log(res)
                if (res.data.message === 'Success') { alert('Successfully Registered') }
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors);
            });
    }

    return (
        <div className='border shadow col-md-5 col-sm-5 col-lg-4' style={formStyle}>

            <div className="tab-content">
                
                {/* <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"> */}
                    <form onSubmit={submitHandler}>
                        <div className="text-center mb-3">
                        <p className='display-5 mb-1'><FaUserPlus /></p>
                            <p className='display-6 mb-4'>Sign up</p>
                        </div>
                        {/*<!-- Name input --> */}
                        <div className="form-outline mb-2">
                            <input type="text" id="registerName" name='fullname' className="form-control"/>
                            <label className="form-label" htmlFor="registerName">FullName</label>
                        </div>
                        
                        {/*<!-- Email input --> */}
                        <div className="form-outline mb-2">
                            <input type="email" id="registerEmail" name='email' className="form-control" />
                            <label className="form-label" htmlFor="registerEmail">Email</label>
                        </div>
                        {/*<!-- Password input --> */}
                        <div className="form-outline mb-2">
                            <input type="password" id="registerPassword" name='password' className="form-control" />
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                        </div>
                        {/*<!-- Repeat Password input --> */}
                        <div className="form-outline mb-2">
                            <input type="password" id="registerRepeatPassword" name='confirm' className="form-control" />
                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                        </div>
                        
                        {/*<!-- Submit button --> */}
                        <button type="submit" className="btn btn-primary btn-block my-3 px-5">Register</button>
                </form>
                
                <div>
                    <ul>
                        {errors.map(error => (
                            <li className="text-danger">{ error.msg}</li>
                        ))}
                    </ul>
                </div>
                </div>
            {/* </div> */}
            {/*<!--Pills content--> */}
        </div>
    )
}

export default RegisterForm