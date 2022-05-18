import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: String},
    titulo: { type: String, required: true},
    autor: {type:mongoose.Schema.Types.ObjectId, ref:'autores', required: true}, //referenciado um id de outro objeto
    editora: { type: String, required: true},
    numPagina: {type: Number}
});


const livros = mongoose.model('livros', livroSchema);

export default livros;