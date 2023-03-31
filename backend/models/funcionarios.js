const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const funcionario = new Schema ({

    cpf        : { type:String, required: true},
    nome       : { type:String, required: true},
    cep        : { type:String },
    telefone   : { type:String, required: true},
    email      : { type:String, required: true},
    funcao     : { type:String, required: true}
})

const FuncionarioModel = mongoose.model('funcionarios', funcionario);


module.exports = {FuncionarioModel}