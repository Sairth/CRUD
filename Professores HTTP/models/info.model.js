const mongoose = require("mongoose");

const InfoSchema = mongoose.Schema({
    nome: {
        type: String,
        require: [true, 'Por favor coloque um nome'],
        default: 0
    },
    email:{
        type: String,
        require: false,
        default: 0
    },
    cpf:{
        type: Number,
        require: [true, 'Por favor informe um cpf'],
        default: 0
    },
    materia:{
        type: String,
        require: [true, 'Por favor informe a matéria do professor'],
        default: 0
    },
},
{
    timestamps: true
}
);

const Info = mongoose.model('Info', InfoSchema);

module.exports = Info;