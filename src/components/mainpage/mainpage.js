import React, { Component } from 'react';
import './mainpage.css';

class Mainpage extends Component {

    
    render() {
        return (
            <div className="mainpage">
                <div className="buttoncontainer">
                    <h1>NoteTaker</h1>
                    <h2>Your Solution for All Note Taking</h2>
                    <a href='http://localhost:3034/login'><button id="login">Log In / Register</button></a>
                </div>
            </div>
        )
    }
}

export default Mainpage;