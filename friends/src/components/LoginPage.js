import React from 'react';
import axios from 'axios';

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        // console.log(e)
        e.preventDefault();
        axios
        .post('http://localhost:5000/login', this.state.credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friends')
        })
        .catch(err => {
            console.log(err)
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                    type='text'
                    name='username'
                    placeholder='Enter username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <input 
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;