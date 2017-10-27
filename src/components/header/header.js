import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    render() {
        return (
            <div>
                <header id="head">
                    <div className="text-effect">Home</div>
                    <div className="text-effect">All Notes</div>
                </header>
            </div>
        )
    }
}

export default Header;