import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsList from './FriendsList';

class FriendsForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    }

    addFriend = () => {
        axios
        .post('http://localhost:5000/api/friends', this.state.newFriend, {
                headers: {Authorization: localStorage.getItem("token")}
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className='friends-form'>
                <h2>Add a Friend</h2>
                <form onSubmit={this.addFriend}>
                    <input 
                    type="text"
                    name="name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                    placeholder="Enter Name"
                    />
                    <input 
                    type="number"
                    name="age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                    placeholder="Enter Age"
                    />
                    <input 
                    type="email"
                    name="email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                    placeholder="Enter Email"
                    />
                    <button type='submit'>Add</button>
                </form>
                <FriendsList key={this.state.newFriend.id} id={this.state.newFriend.id} />
            </div>
        )
    }
}

export default FriendsForm;