const Books = require("../../models/Books")

const AllBooks = async(req,res)=>{

    //Filter includes a price or book condition and other various attributes
    const Filter = req.body.filter;

    //let's assume sort value contains the object=>{attribute:(order)} => AuthorName : 1
    const sortOrder = req.body.sortorder;

    const findBooks = await Books.find(Filter).sort(sortOrder);
    res.send(findBooks);
};

const Book = async(req,res)=>{

    //Fetching a specific book from book id
    const _id = req.body._id;
    const findBook = await Books.findById({_id:_id});
    res.send(findBook);
}
module.exports = {
    AllBooks,
    Book
}