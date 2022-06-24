import mongoose from "mongoose"

mongoose.connect("mongodb+srv://AndreMatioski:C0nnect123@projetoapirestfull.fmleoz7.mongodb.net/APIRestFull");

let db = mongoose.connection;

export default db;