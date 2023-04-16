const Books = require("../../models/Books")

const UpdateBook = async(req,res) =>{
    //Filter for searching a Book want's to update
    const BookName = req.body.bookname;

    //new data which is to updated
    const UpdateData = req.body.data;
    try {
        if(!await Books.findOne({BookName})) return res.send("Book Not Found!")
        const Updated = await Books.findOneAndUpdate(BookName,UpdateData,{new:true});
        
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