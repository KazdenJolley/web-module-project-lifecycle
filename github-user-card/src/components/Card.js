import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <h1>{this.props.info.bio}</h1>
        )
    }
}

export default Card;