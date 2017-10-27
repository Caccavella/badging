import React, { Component } from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="dashcontainer">
                <header id="head">
                    <div>Home</div>
                    <div>All Notes</div>
                </header>
                <div className="new-note">
                    <Link to="/create-note"><button className="buttonone">+ New Note</button></Link>
                    <Link to="/create-note"><button className="buttontwo">+</button></Link>
                </div>
                    <p>Recent Notes</p>
            </div>
        )
    }
}

export default Dashboard;