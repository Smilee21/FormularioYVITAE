import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js'

const app = express();

let array = []

const __dirname = dirname(fileURLToPath(import.meta.url))


//configuraciones
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(indexRoutes)

app.post('/contact', (req, res) =>  {
    let elementosForm = req.body
    array.push(elementosForm);
    res.send(JSON.stringify('guardada bb'))
    console.log(array)
})

app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log('server on port', 3000);