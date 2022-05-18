import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jvs:123@jvs.kwjfx.mongodb.net/jvs-node");

let db = mongoose.connection;

export default db;