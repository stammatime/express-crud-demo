import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// simple log middleware
const myLogger = (req: any, res: any, next: any) => {
    // tslint:disable-next-line: no-console
    console.log(req.body);
    next();
}

app.use(myLogger);

const items: Map<number, string> = new Map();
let id: number = 3;

items.set(1, "initialData");
items.set(2, "testData");

// Get all items
app.get( "/widget", ( req, res ) => {
    res.status(200).send(Object.fromEntries(items));
} );

// Add a new item
app.post("/widget", ( req, res ) => {
    items.set(id, req.body.item);
    id++;
    res.status(200).send(Object.fromEntries(items));
} );

// Update existing item
app.put("/widget/:itemId", ( req, res ) => {
    const itemId = parseInt(req.params.itemId, 10);
    const item = items.get(itemId);
    if(item) items.set(itemId, req.body.item);
    res.status(200).send(Object.fromEntries(items));
} );

// delete an item
app.delete( "/widget/:itemId", ( req, res ) => {
    items.delete(parseInt(req.params.itemId, 10));
    res.status(200).send(Object.fromEntries(items));
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );