import React, { Component } from 'react';
import SingleNote from '../SingleNote/SingleNote';

class AllNotes extends Component {
    constructor() {
        super();

        this.state = {
            notes: '',
            note_id: 0,
        }

    }
    componentDidMount() {
        axios.get('/getNotes').then(res => {
            this.setState({
                note_id: res.data.note_id
            })
        })
    }

    render() {
        const notesList = this.props.notes.map((e, i) => {
            return (
                <div>
                    
                    <p>{e.note_title}</p>
                    <p>{e.note_message}</p>
                </div>
            )
        })
        let match = this.state.note_id;
        return <SingleNote match={match} />
        
        return(
            <div>
                {notesList}
            </div>
        )
    }
}

export default AllNotes;
