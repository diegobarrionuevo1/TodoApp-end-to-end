import {Router} from "express"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js"

const router  = Router()

//"/api/v1/todo"
router.get("/",getTodos)
        .put("/",updateTodo)
        .post("/", createTodo)
        .delete("/:id", deleteTodo)


export {router as todoRouter}