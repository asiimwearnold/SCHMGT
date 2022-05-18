import express from 'express';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import template from '../template.mjs';

import userRoutes from './routes/user.routes'
const app = express()
/* configuring express ..........*/

/* express ... middle-wares.......*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// seting up express to server a simple HTML
 app.get('/', (req, res)=>{
     res.status(200, {"content-type": "text/plain"}).send(template())
 })
// making all routes accessible from the client
app.use('/', userRoutes)

export default app
