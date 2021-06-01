import React from 'react';

class Card extends React.Component {

    render() {
        const { info } = this.props;
        return (
            <div>
                <p>Name: {info.name}</p>
                <p>Bio: {info.bio}</p>
                <p>Location: {info.location}</p>
                <p>Followers: {info.followers}</p>
                <p>Following: {info.following}</p>
                <a href={info.html_url}>Github Profile</a>
                <img src={info.avatar_url} alt="logo"/>
            </div>
        )
    }
}

export default Card;