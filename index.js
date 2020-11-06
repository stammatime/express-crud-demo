const express = require( "express" );
const app = express();
const port = 3000; 

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get( "/widget", ( req, res ) => {
    res.send( "Hello from widget!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );