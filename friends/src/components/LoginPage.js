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
        console.log(e)

        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.log('err', err)
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
                    <button type='submit'>Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;