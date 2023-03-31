const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const sala = new Schema ({

    tipo        : { type:String, required: true},
    numero      : { type:String, required: true},
    capacidade  : { type:String, required: true},
    valor       : { type:String, required: true},
    descricao   : { type:String, required: true},
    imagem      : { type:String, required: true}
})

const SalaModel = mongoose.model('salas', sala);


module.exports = {SalaModel}