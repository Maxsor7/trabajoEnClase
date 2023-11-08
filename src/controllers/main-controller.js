// const service = require('../services/products');
const products = require("../services/products");

let baseUrl = "http://localhost:3031";
let url = "/api";

const controller = {
  home: (req, res) => {
    res.redirect(url);
  },
  apiHome: (req, res) => {
    res.send({
      productos: baseUrl + url + "/productos",
    });
  },
  apiProducts: (req, res) => {
    let panes = products.findAll();
    res.send(panes);
  },
  apiProductDetail: (req, res) => {
    const id = req.params.id;
    let panAEnviar = products.findById(id);
    res.send(panAEnviar);
  },
  apiProductCreate: (req, res) => {
    console.log("Creando un nuevo pan");
    console.log(req.body);
    products.create(req.body);
    res.redirect("/api/productos");
  },
  apiProductDelete: (req, res) => {
    products.delete(req.params.id);
    res.redirect("/api/productos");
  },
};
module.exports = controller;
