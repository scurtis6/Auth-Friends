import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsForm from './FriendsForm';
import Friends from './Friends';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res)
            this.setState({
                friends: res.data
            })
        })
        .catch(err => console.log('error', err))
    }

    // deleteFriend = id => {
    //     axios
    //     .delete(`http://localhost:5000/api/friends/${id}`, this.state.newFriend, {
    //         headers: {Authorization: localStorage.getItem("token")}
    //     })
    // }

    // deleteFriend = (id) => {
    //     axiosWithAuth()
    //     .delete(`/friends/${id}`, this.state.friends.id, 
    //     {headers: {Authorization: localStorage.getItem("token")}})
    //   };
    deleteFriend = (id) => {
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {
            console.log(res)
            this.setState({
                friends: res.data
            })
      })
    }
    // addFriend = () => {
    //     axiosWithAuth()
    //         .post('http://localhost:5000/api/friends', this.state.friends, {
    //             headers: {Authorization: localStorage.getItem("token")}
    // })
    //         .then(res => {
    //             this.getData();
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    render() {
        return (
            <div>
                <div>
                    {/* <FriendsForm /> */}
                    <h2>My Friends</h2>
                    </div>
                    {this.state.friends.map(friend => (
                    <div>
                        <h3>Name: {friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                        <button onClick={() => {this.deleteFriend(friend.id)} }>{`Delete ${friend.name}`}</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList;