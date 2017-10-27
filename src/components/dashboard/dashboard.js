import React, { Component } from 'react';
import './dashboard.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getUserInfo} from '../../redux/main-reducer';
import axios from 'axios';
import Header from '../header/header'

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            notes: {}
        }
        this.getNotes = this.getNotes.bind(this);
    }
    componentDidMount() {
        this.getNotes();
        // console.log(this.props.user)
    }

    getNotes(){
        axios.get('/api/getNotes').then(res => {
            this.setState({
                notes: res
            })
            console.log(this.state.notes)
        })
    }
    render() {
        // var notesDisplay = this..props.notes.map( (e,i) => {

        // })
        return (    
            <div className="dashcontainer">
                    <Header />
                <div className="new-note">
                    <Link to="/create-note"><button className="buttonone">+ New Note</button></Link>
                    <Link to="/create-note"><button className="buttontwo">+</button></Link>
                </div>
                    <p>Recent Notes</p>
                    <h5>Welcome {this.props.user}</h5>

                    <div className="notes-container">

                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {getUserInfo} )(Dashboard);