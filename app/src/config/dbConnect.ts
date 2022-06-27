import mongoose from "mongoose"

mongoose.connect("mongodb+srv://AndreMatioski:gremio123@projetoapirestfull.fmleoz7.mongodb.net/APIRestFull");

let db = mongoose.connection;

export default db;