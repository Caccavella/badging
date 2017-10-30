import React, { Component } from 'react';

class SingleNote extends Component {
    constructor() {
        super();

        this.state = {
            note: null
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