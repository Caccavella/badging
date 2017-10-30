import React, { Component } from 'react';
import './mainpage.css';
import {Link} from 'react-router-dom';

class Mainpage extends Component {

    
    render() {
        return (
            <div className="mainpage">
                <div className="buttoncontainer">
                    <h1>NoteTaker</h1>
                    <h2>Your Solution for All Note Taking</h2>
                    <Link to='/dashboard'>
                 
                        Log In / Register
                        
                        </Link>
                </div>
            </div>
        )
    }
}

export default Mainpage;