import React from 'react';
import axios from 'axios';

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    login = e => {
        console.log(e)
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                    type='text'
                    name='username'
                    placeholder='Enter username'
                    />
                    <input 
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;