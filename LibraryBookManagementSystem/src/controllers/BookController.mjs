import BookModel from "../models/BookModel.mjs";
const addbooks = async (req, res) => {
    const bookdata = req.body;
  const bookData = await BookModel.insertMany(bookdata);
  if (!bookData) return res.send("Error Adding Books");
  //   console.log(bookData);
  res.send({ status: ` Status 201 Book added successfully`,message : bookData });
};

const getallbooks = async (req, res) => {
    const getbook = await BookModel.find();
    if(!getbook) return res.send({ message:"No books found"});
    res.send({status:true, data:getbook});
    
}
export {addbooks,getallbooks};