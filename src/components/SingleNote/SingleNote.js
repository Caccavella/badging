import React, { Component } from 'react';
import axios from 'axios';

class SingleNote extends Component {
    constructor() {
        super();

        this.state = {
            note: []
        }
    }
    componentDidMount() {
        axios.get('/oneNote/' + this.props.match.params.id).then(res => {
            this.setState({
                note: res.data
            })
            console.log(this.state.note)
        })
        // this.state.notes.get_notes(this.props.match.params.id).then(note => this.setState({note}))
    }

    render() {
        var note = this.state.note.map((e,i) => {
            return (
                <div key={i}>
                <div className="title">
                {e.note_title}
                </div>
                <div className="message">
                {e.note_message}
                </div>
                </div>
            )
        })
        return(
            <div className="notewrapper">
                {note}
            </div>
        )
    }
}

export default SingleNote;