const express = require('express')
const app = express();
const {default:mongoose} = require('mongoose');
require('dotenv').config({path: './.env'});
const UserRoute = require('./api/routes/UserRoute');
const BooksRoute = require('./api/routes/BooksRotue')

//MongoDb Connection
const db = () =>{
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true})
    .then(()=>{
        console.log('Connected to db');
    })
    .catch((err)=>{
        console.log(err)
    })
}
db();

app.use(express.json())

//Routing
app.use('/user',UserRoute)
app.use('/books',BooksRoute);

//Listening Server on port 8000
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})