import React from 'react';

class Follower extends React.Component{
    render() {
        const { follower } = this.props;

        return(
            <li>
                <img src={follower.avatar_url} alt="avatar" />
                <p>Username: {follower.login}</p>
            </li>
        )
    }
}

export default Follower;