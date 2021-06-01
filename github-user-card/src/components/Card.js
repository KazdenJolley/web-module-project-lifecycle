import axios from 'axios';
import React from 'react';
import Follower from './Follower';

class Card extends React.Component {
    render() {
        const { info, followers } = this.props;
        return (
            <div>
                <p>Name: {info.name}</p>
                <p>Bio: {info.bio}</p>
                <p>Location: {info.location}</p>
                <ul>Followers: 
                    {
                        followers.map((follower, idx) => {
                            return <Follower key={idx} follower={follower} />
                        })
                    }
                </ul>
                <p>Following: {info.following}</p>
                <a href={info.html_url}>Github Profile</a>
                <img src={info.avatar_url} alt="logo"/>
            </div>
        )
    }
}

export default Card;