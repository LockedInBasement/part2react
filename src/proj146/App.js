import React, {createRef , useState, useReducer, useEffect } from 'react';

import CourseInfo from './CourseInfo';
import Form from './Form'

import './style.css';

const tablica = [
    {
        id:'0',
        title:'web trest',
    },
    {
        id:'1',
        title:'last wer',
    },
    {
        id:'2',
        title:'hooks',
    },
    {
        id:'1',
        title:'git',
    },
];

const coursesReducer = (state,action) => {
    switch(action.type){
        case 'ADD':
            return [...state, action.course];
        case 'REMOVE':
            return state.filter(course => course.id !== action.id);
        case 'FETCH':
            return action.data;
        default:
            throw new Error('ERROR');
    }
};

const fetchAsyncData = async () =>{
    await new Promise(resolve => setTimeout(resolve,3000));
}

const App = () => {

    const [state,dispatch] = useReducer(coursesReducer, []);

    const asyncFetch = async () =>{
        await fetchAsyncData();
        dispatch({type: 'FETCH', data: tablica});
    };

    useEffect(() => {
        asyncFetch();
    }, []);


    const coursesElement = state.map(course => (
        <CourseInfo key={course.id} onClickHandler={dispatch} {...course} />
    ))

    return(
        <div>
            {coursesElement}
            <Form addHandler = {dispatch}/>
        </div>
    );
};

export default App;