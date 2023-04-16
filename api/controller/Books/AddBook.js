const Books = require('../../models/Books')

const AddBook = async (req,res) =>{
    const BookName = req.body.bookname;
    const AuthorName = req.body.authorname;
    const PublishedYear = req.body.publishedyear;
    const Price = req.body.price;
    const Discount = req.body.discount;
    const Quantity = req.body.quantity;
    const NumberOfPages = req.body.numberofpages;
    const BookCondition = req.body.bookcondition;

    //preveting of double entries of same book
    const findBook = await Books.findOne({BookName:BookName});
    if(findBook) return res.send('Book Already added!');
    
    const book = new Books({
        BookName,
        AuthorName,
        PublishedYear,
        Price,
        Discount,
        Quantity,
        NumberOfPages,
        BookCondition
    });

    try {
        const savebook = await book.save();
        res.send(savebook);
    } catch (error) {
        res.send(error)
    }

};

module.exports = AddBook;