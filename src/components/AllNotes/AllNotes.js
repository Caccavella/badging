import React, { Component } from 'react'


modeules.export() = this.props.notes.map((e, i) => {
    return (
        <div>
            <p>{e.note_title}</p>
            <p>{e.note_message}</p>
        </div>
    )
})