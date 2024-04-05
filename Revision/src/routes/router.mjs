import  Express  from "express";
import findStudent from "../controllers/fstclasscontrol.mjs";
const router = Express.Router();
router.get( "/",findStudent)
export default router;
