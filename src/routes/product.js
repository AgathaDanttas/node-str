"use strict";

const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  res.status(201).send(req.body);
});

//atualiza o objeto em um determinado id
router.put("/:id", (req, res, next) => {
  const id = req.params.id; //recuperando parâmetros que vem pela url
  res.status(201).send({
    id: id,
    item: req.body,
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).send(req.body);
});

module.exports = router;
