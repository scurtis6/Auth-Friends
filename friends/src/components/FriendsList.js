import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

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

    render() {
        return (this.state.friends.map(friend => (
            <div>
                <h2>Name: {friend.name}</h2>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
            </div>
        )))
    }
}

export default FriendsList;