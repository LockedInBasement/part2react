import React, { useState } from 'react';

const Form = (author = '',comment,id,rate) => {

    const{authorInput, setAuthorInput } = useState(author);
    const{rateInput, setRateInput } = useState(rate);
    const{commentInput, setCommentInput } = useState(comment);

    const hanldleChangeAuthor = event => setAuthorInput(event.target.value);
    const hanldleChangeRate = event => setRateInput(event.target.value);
    const hanldleChangeComment = event => setCommentInput(event.target.value);
    const handleOnSubmit = event => {
        event.preventDefault();

        if (!authorInput.length)
        {
            return;
        }

        const rateObject = {
                author: authorInput,
                comment: commentInput,
                id,
                rate: Number(rateInput),
        };
    }

    return(
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>Autor:
                    <input onChange={hanldleChangeAuthor} type="text" value={authorInput}/>
                </label>
            </div>
            <div>
                <label>Ocena:
                    <input onChange={hanldleChangeRate} type="number" value={rateInput}/>
                </label>
            </div>
            <div>
                <label>Komentarz:
                    <input onChange={hanldleChangeComment} type="text" value={commentInput}/>
                </label>
            </div>
            <button type="submit" >
                {id ? 'Edycja oceny' : 'Dodaj ocenę'}
            </button>
        </form>

    );
};

export default Form;