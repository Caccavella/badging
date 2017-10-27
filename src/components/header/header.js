import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <header id="head">
                    <div className="text-effect"><Link to="/dashboard">Home</Link></div>
                    <div className="text-effect">All Notes</div>
                </header>
            </div>
        )
    }
}

export default Header;