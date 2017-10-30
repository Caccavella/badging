import React, { Component } from 'react';
import './dashboard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../redux/main-reducer';
import axios from 'axios';
import Header from '../header/header'
import LoadingPage from '../LoadingPage/LoadingPage';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            notes: []
        }
        this.deleteNote= this.deleteNote.bind(this)
    }
    componentDidMount() {
        
        axios.get('/getNotes').then(res => {
            this.setState({
                notes: res.data
            })
            console.log(this.state.notes)
        })
        
    }

    deleteNote(eid) {
        console.log('clicked')
        axios.delete('/deleteNote/' + eid).then(res => {
            axios.get('/getNotes').then((res) => {
                this.setState({
                    notes: res.data
                })
            })
        })
    }

    render() {
        var notesData = this.state.notes.map((e,i) => {
            return(
                <div key={i}> 
                    <div>
                    {e.note_title}
                    </div>
                    <div>
                    {e.note_message}
                    </div>
                    <Link to={`/note/${e.note_id}`}><button>View Note</button></Link>
                    <button onClick={() => this.deleteNote(e.note_id)}>Delete Note</button>
                </div>
            )
        })

        return (
            <div className="dashcontainer">
                <Header />
                <div className="new-note">
                    <Link to="/create-note"><button className="buttonone">+ New Note</button></Link>
                    <Link to="/create-note"><button className="buttontwo">+</button></Link>
                </div>
                <p>Recent Notes</p>
                <h5>Welcome <LoadingPage name='Anthony' /></h5>

                <div className="notes-container">
                    {notesData}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { getUserInfo })(Dashboard);