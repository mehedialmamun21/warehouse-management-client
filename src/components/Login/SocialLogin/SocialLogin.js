import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import app from '../../../firebase.init';
import googleIcon from '../../../images/google.png';

const auth = getAuth(app);

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        
        errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
       
      }

    if(user){
        navigate('/');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-25 d-block mx-auto'>
                    <img src={googleIcon} alt="" />
                        - Sign in
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;