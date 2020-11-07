import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'express-jwt';

declare global{
    namespace Express {
        export interface Request {
           user?: Auths
        }
        export interface Auths {
            canGet: boolean,
            canPost: boolean,
            canPut: boolean,
            canDelete: boolean
        }
     }
}

const app = express();
const port = 3000;

app.use(bodyParser.json());

// simple log middleware
const myLogger = (req: any, res: any, next: any) => {
    // tslint:disable-next-line: no-console
    console.log(req.body);
    // tslint:disable-next-line: no-console
    console.log(req.user);
    next();
}

app.use(myLogger);

const items: Map<number, string> = new Map();
let id: number = 3;

items.set(1, "initialData");
items.set(2, "testData");

// Get all items
app.get( "/widget", jwt({ secret: 'secretCode', algorithms: ['HS256'] }), ( req, res ) => {
    if(req.user.canGet){
        res.status(200).send(Object.fromEntries(items));
    }
} );

// Add a new item
app.post("/widget", jwt({ secret: 'secretCode', algorithms: ['HS256'] }), ( req, res ) => {
    if(req.user.canPost){
        items.set(id, req.body.item);
        id++;
        res.status(200).send(Object.fromEntries(items));
    }
} );

// Update existing item
app.put("/widget/:itemId", jwt({ secret: 'secretCode', algorithms: ['HS256'] }), ( req, res ) => {
    if(req.user.canPut){
        const itemId = parseInt(req.params.itemId, 10);
        const item = items.get(itemId);
        if(item) items.set(itemId, req.body.item);
        res.status(200).send(Object.fromEntries(items));
    }
} );

// delete an item
app.delete( "/widget/:itemId", jwt({ secret: 'secretCode', algorithms: ['HS256'] }), ( req, res ) => {
    if(req.user.canDelete){
        items.delete(parseInt(req.params.itemId, 10));
        res.status(200).send(Object.fromEntries(items));
    }
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );