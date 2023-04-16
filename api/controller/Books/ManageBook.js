const Books = require("../../models/Books")

const UpdateBook = async(req,res) =>{
    //Filter for searching a Book want's to update
    const Filter = req.body.filter;

    //new data which is to updated
    const UpdateData = req.body.data;
    try {
        const Updated = await Books.findOneAndUpdate(Filter,UpdateData,{new:true});
        res.send(Updated);
    } catch (error) {
        res.send(error)
    }
};

const RemoveBook = async (req,res) =>{

    //removing book by bookname
    const BookName = req.bookname;

    try {
        const Deleted = await Books.findOneAndDelete(BookName);
        res.send(Deleted);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    UpdateBook,
    RemoveBook
}