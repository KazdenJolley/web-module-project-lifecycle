import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <h1>{this.props.info} World!</h1>
        )
    }
}

export default Card;