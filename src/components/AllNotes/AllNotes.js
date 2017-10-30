import React, { Component } from 'react';

class AllNotes extends Component {
    constructor() {
        super();

        this.state = {
            notes: ''
        }

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
        
        return(
            <div>
                {notesList}
            </div>
        )
    }
}

export default AllNotes;
