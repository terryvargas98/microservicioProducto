const { model, Schema } = require('mongoose');

const SchemaProducto = new Schema({
    producto_id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true
    },
    Created: {
        type: Date,
        required: true
    },
})

module.exports = model('producto', SchemaProducto);