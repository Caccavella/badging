import React, { Component } from 'react';
import './dashboard.css';

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
                    <button className="buttonone">+ New Note</button>
                    <button className="buttontwo">+</button>
                </div>
                    <p>Recent Notes</p>
            </div>
        )
    }
}

export default Dashboard;