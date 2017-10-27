import axios from 'axios';

const GET_USER_INFO = "GET_USER_INFO";
const ADD_NOTE_TITLE = "ADD_NOTE_TITLE";
const ADD_NOTE_MESSAGE = "ADD_NOTE_MESSAGE";
const GET_NOTES = "GET_NOTES";

var initialState = {
    user: {},
    notes: {},
    note_title: '',
    note_message: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_NOTES:
            return Object.assign({}, state, { notes: action.payload })
        case ADD_NOTE_TITLE:
            return Object.assign({}, state, { note_title: action.payload })
        case ADD_NOTE_MESSAGE:
            return Object.assign({}, state, { note_message: action.payload })
        default:
            return state;
    }

}

export function getUserInfo() {
    const userInfo = axios.get('/api/users').then(res => {
        return res.data
    })
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}

export function getNotes() {
    const noteInfo = axios.get('/api/getNotes').then(res => {
        return res.data
    })
    return {
        type: GET_NOTES,
        payload: noteInfo
    }
}

export function addNoteTitle(data) {
    return {
        type: ADD_NOTE_TITLE,
        payload: data
    }
}

export function addNoteMessage(message) {
    return {
        type: ADD_NOTE_MESSAGE,
        payload: message
    }
}