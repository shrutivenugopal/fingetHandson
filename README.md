# fingetHandson 

### Simple e-editor application with react &amp; redux 
### Project Title : E_Book_App 
#### Description:
- On loading application will display a page of a story. 
- All the page titles of a book are displayed in the sidebar on the left 
- User can add or edit a page 
- All components are functional components
    Store stores the page and titles as
    ``` 
    store: {
                pages:[{title:"Solomon Grundy", 
                content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante."}]  
    }
    ```        
Each page is an object with properties title and content

- Two actions are defined: `SAVE_TITLE` & `UPDATE_TITLE`
- `SAVE_TITLE`: to add a new page to the book
- `UPDATE_TITLE`: to edit/update an existing page in the book
    
- plain css used for styling @src\styling\home.css
- store management @ src\store

### To install:
     run npm install 
     run npm start
App will be opened at http://localhost:3000/ 

### Dependencies:
- Font awesome icons used for social media icons on footer
- react-draft-wysiwyg used for rich text editor
- Redux is used for state management
