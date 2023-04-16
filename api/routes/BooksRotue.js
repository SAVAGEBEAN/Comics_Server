const Router = require('express').Router();
const AddBook = require('../controller/Books/AddBook');
const VerifyUser = require('../middlewares/VerifyUser');
const {AllBooks,Book} = require('../controller/Books/GetBooks');
const {UpdateBook, RemoveBook} = require('../controller/Books/ManageBook');

//get a specific Book Details
Router.get('/',VerifyUser,Book);

//get all books from database
Router.get('/all',VerifyUser,AllBooks);

//route for adding new books
Router.post('/add',VerifyUser,AddBook);

//router for updating book details
Router.post('/update',VerifyUser,UpdateBook);

//route for removing a specific book
Router.post('/remove',VerifyUser,RemoveBook);

module.exports = Router;