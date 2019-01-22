import React from 'react';
import './header.css'

export default function Header(){
    return (<header>
      <nav>
         <div className='What'><a  href="">WHAT ?</a></div> 
         <div className='newGame'><a  href="">+ New Game</a></div>
      </nav>
      <br/>
      <h1>HOT or COLD</h1>    
    </header>);
}