import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import simg from '../assets/p3.jpg';
import { useMutation } from 'react-query';
import {useSignIn} from 'react-auth-kit';
import { loginUser } from '../components/hooks/useLoginUser';
import {useIsAuthenticated} from 'react-auth-kit/';

const Login = () => {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const navigate = useNavigate();
  
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/createpost', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const { mutate, isLoading } = useMutation(loginUser);

  const handleSubmit = () => {
    const props = {
      email: email,
      password: password,
    };

    mutate(props, {
      onError: (err) => {
        setErrorMsg(err?.message || 'Unable to login due to an unknown error');
      },
      onSuccess: (res) => {
        const result = res.data;
        if (signIn({
          token: res.token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: res,
        })) {
          navigate('/createpost');
        } else {
          alert('error');
          setErrorMsg('Unable to login due to an unknown error');
        }
      },
    });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black d-flex align-items-center justify-content-center">
            <div>
              <div className="px-5 ms-xl-4 text-center">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
                <span className="h1 fw-bold mb-0">BLOTINKER</span>
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: '23rem' }}>
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" name="email" id="form2Example18" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="form2Example18">Email address</label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" name="password" id="form2Example28" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="form2Example28">Password</label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button" onClick={handleSubmit} disabled={isLoading}>
                      {isLoading ? 'Loading...' : 'Login'}
                    </button>
                  </div>
                  {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img 
              src={simg}
              alt="Login image" 
              className="w-100 vh-100" 
              style={{ objectFit: 'cover', objectPosition: 'left' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
