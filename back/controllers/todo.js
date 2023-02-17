import Todo from "../models/Todo.js"

export const getTodos = async (req, res) =>{
    const todos = await Todo.find()
    res.json({data: todos , message: "all the todos"})
}

export const createTodo = async (req, res) =>{
    const {description} = req.body
    const todo =  await Todo.create({description})
    res.json({data: todo, message: "Todo creado correctamente"})
}

export const updateTodo = async (req,res)=>{
    const {isComplete, id} = req.body
    const todo = await Todo.findByIdAndUpdate(id,{isComplete},{new: true})//new true para que devuelva el dato actualizado
    res.json({data: todo, message:"Todo actualizado correctamente"})
}

export const deleteTodo = async( req, res) =>{
    const {id} = req.params
    await Todo.findByIdAndDelete(id)
    res.json({data:[], message:"Se elimino correctamente"})
}