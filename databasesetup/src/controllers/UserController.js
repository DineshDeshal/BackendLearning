// import models from models folder
const usermodel = require('../models/usermodel')


const user = async (req,res) => {
    const data = req.body;
    const createduser = await usermodel.create(data);  
     return res.send({status : 'ok',message : createduser});
//     try{
//         let result = await usermodel.user(data);  
//         if(!result){ 
//             res.send({message: 'User already exists'})    
//         }else{
//            res.send(result);
//         }          
        
//     }catch(err){
//         console.log("Error in User", err);
//         res.send({error : err});
//     }
// }

// //To get the details of a particular user by id
// const userById = async (req , res , next) => {
//     const id = req.params.id ;
//     try{
//        let result = await usermodel.userById(id);
//        if(!result){
//           return res.send({ message : "No user found" })
//        }
//        req.userData = result ;
//        next();
//     }catch(err){
//        console.log("Error in user By Id ", err);
//        res.send({ error : err });
//     }
// }

// //To update the details of a particular user by id
// const updateUser = async (req , res) => {
//     const data = req.body ;
//     const id = req.params.id ;
//     try{
//        let result = await usermodel.updateUser(data , id ) ;
//        res.send(result) ;
//     } catch(err){
//        console.log("Error in Update User ", err) ;
//        res.send({ error : err.toString() }) ;
//     }
// }

// module.exports = {
//    registerUser,  
//    loginUser,  
//    logoutUser,  
//    allUsers, 
//    userById,
//    updateUser,
//    user
// };  

}
module.exports = user;