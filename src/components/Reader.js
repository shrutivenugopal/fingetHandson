import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Reader(props) {
    const { addHandler, title, content, editHandler } = props;
    return (
        <article>
            <header>
                {title.toUpperCase()}
                <span id="editButton" onClick={editHandler}><FontAwesomeIcon id="faButton" size="md" color="black" icon={faEdit} /></span>
            </header>
            <section id="readerText">
                {content}
            </section>
            <div class="readerFooter">
                <button id="addPageButton" onClick={addHandler}>Add New Page <span><FontAwesomeIcon size="md" color="black" icon={faPlus} /></span> </button>
            </div>
        </article>
    )
}