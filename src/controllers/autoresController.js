import autores from "../models/Autor.js";


class AutoresController{
    static listarAutores = (req, res) => {
        autores.find((err, autores) =>{
        res.status(200).json(autores);
    })
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) =>{
            if(err){
                res.status(400).send({message: `${err.message} - autor não localizado`});
            } else{
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) =>{
        let autor = new autores(req.body);

        autor.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o autor`});
            }else{
                res.status(201).send(autor.toJSON());
            }

        });
    }

    static atualizarAutor = (req, res) =>{
        const id = req.params.id; //pega o id que quer atualizar

        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:'Autor atualizado com sucesso'});
            }else{
                res.status(500).send({message: `${err.message} - Erro ao atualizar o autor`})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Autor removido com sucesso'})
            }else{
                res.status(500).send({message: `${err.message} - Autor não removido`})
            }
        })
    }
}

export default AutoresController;
