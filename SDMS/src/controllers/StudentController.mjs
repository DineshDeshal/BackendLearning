import StudentModel from "../models/StudentModel.mjs";
const findStudent = async  (req, res) => {
    // const students = await StudentModel.find();
    const students = await StudentModel.findById("660f8644ceac43664aa5ba50");

    res.send({status : true,message : students})
}
const createStudents = async  (req,res)=>{
    const data = req.body;
    // const createdStudent = await StudentModel.create(data);
    const createdStudent = await StudentModel.insertMany([data,data,data]);
    return res.send({status:'ok' , message : createdStudent});
    // if(!createdStudent){
    //     return res.send({msg:"Error in creating student"})
    // }else{
    //     res.send(createdStudent)
    // }
    
};
const deleteStudent = async  (req,res) =>{
    // const stddelete = await StudentModel.deleteMany({name :"pradeep dhane"});
     const stddelete = await StudentModel.findByIdAndDelete("660f89518e252a62652805a3")
    return res.send({status : 'ok',message : stddelete});
}
const updateStudent = async (req,res) =>{
    // const updateStudent = await StudentModel.updateMany();
    const updateStudent = await StudentModel.updateOne({"name" : "Dinesh Sharma"},{$set:{"name":"DKDESHAL"}});
    return res.send({status:true,message:updateStudent})
}
// const getAllStudents = async (req,res)=> {
//    const students=await StudentModel.find();
//    //console.log(students);
//    res.send(students)
// }
export {findStudent , createStudents , deleteStudent , updateStudent};
