import React, { Component } from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            notes: {}
        }
    }
    componentDidMount() {
        this.getNotes();
    }

    getNotes(){
        axios.get('/api/getNotes').then(res => {
            this.setState({
                notes: res
            })
            console.log(this.notes)
        })
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

                    <div className="notes-container">

                    </div>
            </div>
        )
    }
}

export default Dashboard;