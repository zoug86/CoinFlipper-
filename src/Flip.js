import React, { Component } from 'react';
import Coin from './Coin';
import './Flip.css';
import { choice } from './helpers';

class Flip extends Component {

    static defaultProps = {
        choices: [
            { side: "heads", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" },
            { side: "tails", imgUrl: "https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            headFlips: 0,
            tailFlips: 0,
            numFlips: 0,
            currCoin: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flip() {
        const newCoin = choice(this.props.choices);
        this.setState(oldState => {
            return {
                currCoin: newCoin,
                headFlips: oldState.headFlips + (newCoin.side === "heads" ? 1 : 0),
                tailFlips: oldState.tailFlips + (newCoin.side === "tails" ? 1 : 0),
                numFlips: oldState.numFlips + 1
            }

        })
    }

    handleClick() {
        this.flip();
    }
    render() {
        return (
            <div className="Flip">
                <h1 className="Flip-title">Let's flip a coin</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick} className="Flip-button">Flip Me!</button>
                <div className="Flip-text">
                    <p>Out of {this.state.numFlips} flips, there have been {this.state.headFlips} heads and {this.state.tailFlips} tails.</p>
                </div>
            </div>


        )
    }
}

export default Flip;