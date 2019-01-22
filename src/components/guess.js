import React from 'react';
import './guess.css';

export default function Guess(){
    return (
        <div className="guessSection">
          <form>
              <input type='text' placeholder='Enter your Guess'></input>
          </form>
          <button>Guess</button>
          <h3>Guess #<span>0</span>!</h3>
        </div>
    )
}