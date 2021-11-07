const express = require('express'); //Allows for pages to render using express routes
const bodyParser = require('body-parser'); //  Allows for parsing of middleware content

// Creating async function to catch errors if necessary
const create = async () => {
    const app = express(); // Creates an object to use express routes
    app.set("view engine", "ejs"); // Pages are rendered with ejs
    app.use(express.static('public')); // Allows to process the files within the public folder
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Home pages to access page
    app.get('/', (req, res) => {
        try{
            res.render('index');
        } catch(error){
            res.status(500).send('Unable to load page. Review the log of error.').end();
            console.log(error);
        }
    });
    
    return app; 
}

const PORT = process.env.PORT || 3001; // Allows for a localhost port access or environment set variable to render page

//Creates the application to manage the promise and listen on port 3000 on localhost
create().then(app => {
    app.listen(PORT, () => {
        console.log(`\nServer has started on port http://localhost:${PORT}`);
        console.log('Press Ctrl+C to quit application.');
    })
}).catch(err => console.log(err));