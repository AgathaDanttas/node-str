'use strict';

const mongoose = require('mongoose');
const Product = require('../models/product'); // Certifique-se de que o caminho esteja correto

exports.get = async(req, res) => {
  try {
    const products = await Product.find({active: true},'title price slug');
    res.status(200).send(products);
  } catch (e) {
    res.status(400).send({
      message: 'Produto não encontrado',
      error: e.message,
    });
  }   
}

// Função corrigida para criar um novo produto
exports.post = async (req, res, next) => {
  try {
    const product = new Product(req.body); // Use `new` corretamente sem sobrescrever
    await product.save();
    res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
  } catch (e) {
    res.status(400).send({ message: 'Falha ao cadastrar produto.', data: e });
  }
};


exports.delete = ("/", (req, res, next) => {
  res.status(200).send(req.body);
});

//atualiza o objeto em um determinado id
exports.put = ("/:id", (req, res, next) => {
  const id = req.params.id; //recuperando parâmetros que vem pela url
  res.status(201).send({
    id: id,
    item: req.body,
  });
});
