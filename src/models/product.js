'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//o schema cria o _id automaticamente 
const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true

    },
    slug: {
        type: String,
        required: [true, 'o slug é obrigatório'],
        trim: true,
        index: true,
        unique:true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default:true
    },
    tags: [{
        type: String,
        required:true
    }]
});



module.exports = mongoose.model('Product', schema);