const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Periodo = new Schema({
  

    periodo: {
        type: String,
        
    },
    valorPeriodo:{
        type: Number
    },
    clienteP:{
        type: Schema.Types.ObjectId,
        ref: "cliente"
    }
})
mongoose.model("periodoHora", Periodo)