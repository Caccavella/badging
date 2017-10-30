import React, { Component } from 'react';

class SingleNote extends Component {
    constructor() {
        super();
        let match = this.props.match;

        this.state = {
            note: this.props.match.params.note_id
        }
    }
    componentDidMount() {
        this.props.notes.get(this.props.match.params.id).then(note => this.setState({note}))
    }

    render() {
        return(
            <div>
                {this.note}
            </div>
        )
    }
}

export default SingleNote;