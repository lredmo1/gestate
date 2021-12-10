# Project Title: 
    Fetch-A-Sketch


# Project Owners: 
    1. Zachary Vallarino
        - GitHub userName - zvallarino
    2. Lisa Primeaux-Redmond
        - GitHub userName - lredmo1

# Reason for the project: 
    This project was built to apply and showcase the skills we have learned during  phase four of the Software Engineering Live class - FlatIron Bootcamp (class of 09/21). JavaScript and React were to manipulate the DOM, and HTML and CSS were used to develop and design the components. Sinatra, Activerecord, Ruby, and Rails were used on the backend. Our website also demonstrates use of serialization, user authorization, and validations. Finally it makes extensive use of the HTML canvas element. 

# Project Description: 
    Fetch-A-Sketch uses HTML canvas to allow users to create drawings.  

    In our app, a user can sign up, log in, edit user profile, and log out. They can create a drawing and view and edit their existing  drawings. Each drawing includes the option to build art on multiple layers. Inside of a drawing the user can create a new layer, view existing layers, edit layers, and save them. Together the layers are saved as a drawing. Users can click to bring each layer to the top for editing and rearrange layers for optimal artwork. Unlike most uses of canvas, our save feature does not save images as a JPEG. Rather, it pushes all of the line path data to a database, which stores the data and uses a function to redraw it when rendering a saved drawing. We also developed an erase feature that transforms existing paths into transparent paths. The erase paths are also saved in the database and redrawn when viewing a saved drawing.  


# Known Bugs:
 - Routes: The routes in our application need to be reorganized for better user navigation. 
 - Layer Movement: To rearrange layers, the page must be refreshed and the user must navigate back to the selected drawing. This is a result of faulty routing. Clicking a layer should automatically bring the layer to the top of the canvas without requiring this navigation.  
 - Erase Redraw: If the user hits erase but does not make a line, there will not have a linepath. This throws an error on redraw. 

# Future Iterations:
- Improved navigation such as consistency between buttons and navlinks, adding navigation options on all pages using a navbar
- Render errors to user for log in and sign up 
- Delete a drawing
- Improved routes
- Layer movement that does not require navigating  back to the canvas
- Custom cursor for drawing on canvas