import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img className="Coin-img" src={this.props.info.imgUrl} alt={this.props.info.side} />
            </div>
        )
    }
}

export default Coin;