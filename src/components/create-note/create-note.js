import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/header';
import './create-note.css';


class CreateNote extends Component {
    constructor() {
        super();

        this.state = {
            noteTitle: '',
            noteMessage: ''
        }
    }
    
    submit() {
        axios.post('/api/addNote', this.state).then(res => {
            this.setState({
                noteTitle: '',
                noteMessage: ''
            })
            alert('Note Saved!')
        })
    }

    handleChange(property, val) {
        console.log(val)
        this.setState({
            [property]: val
        })
    }

    render() {
        return(
            <div>
                <Header/>
                <div className="newcontainer">
                Title
                <input value={this.state.noteTitle} placeholder="Title" onChange={(e) => this.handleChange('noteTitle', e.target.value)} />
                Message
                <textarea value={this.state.noteMessage} placeholder="Message" onChange={(e) => this.handleChange('noteMessage', e.target.value)} />
                <button onClick={() => this.submit()}>Submit Note</button>
                </div>


                <div className="animation">Creating Note...</div>
            </div>
        )
    }
}

export default CreateNote;