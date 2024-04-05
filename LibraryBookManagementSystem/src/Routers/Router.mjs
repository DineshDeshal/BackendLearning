import express  from "express";
import { addbooks,getallbooks } from "../controllers/BookController.mjs";
const router = express.Router();
router.get('/api/books',getallbooks);
router.post("/api/books/add",addbooks)


export default router;