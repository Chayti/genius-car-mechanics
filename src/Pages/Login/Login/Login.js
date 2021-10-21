import React from 'react';
import DocumentTitle from 'react-document-title';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <DocumentTitle title='Genius Car Mechanics | Login'>
            <div>
                <h2>Please Login</h2>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </DocumentTitle>
    );
};

export default Login;