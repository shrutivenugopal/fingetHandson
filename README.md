# fingetHandson
Simple e-editor application with react &amp; redux
Project Title : E_Book_App
Description:
    1. On loading application will display a page of a story.
    2. All the page titles of a book are displayed in the sidebar on the left
    3. User can add or edit a page    
    4. All components are functional components
        store stores the page and titles as 
            store: {
                pages:[{title:"qwert", content:"qwerty fghjkl ghjkl"}]
            }
        Each page is an object with properties title and content

    5. Two actions are defined: SAVE_TITLE & UPDATE_TITLE
        SAVE_TITLE : to add a new page to the book
        UPDATE_TITLE: to edit/update an existing page in the book
    
    6. plain css used for styling @src\styling\home.css
    
    7. store management @ src\store

To install:
    run npm install
    run npm start
    app will be opened at http://localhost:3000/

Dependencies:
    1. Font awesome icons used for social media icons on footer
    2. react-draft-wysiwyg used for rich text editor
    3. Redux is used for state management
