export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

const add = ({ author, comment,rate}) => ({

    type: ADD,
    payload: {
        author,
        rate,
        comment,
        id: Math.floor(Math.random*1024),

    }
});

const deleteRate = (id) => ({
    type: DELETE,
    payload:{
        id,
    }
});

const editRate = (author, comment, id, rate) => ({
    type: EDIT,
    payload: {
        author,
        comment,
        id,
        rate,        
    }
});