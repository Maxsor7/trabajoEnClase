let panes = require("../data/panes");

const service = {
  findAll: () => {
    return panes;
  },
  findById: (id) => {
    let panes = service.findAll();
    let panAEnviar = panes.find((pan) => {
      return pan.id == id;
    });
    return panAEnviar || {};
  },
  create: (data) => {
    let panACrear = {
      id: panes[panes.length - 1].id + 1,
      name: data.name,
      category: data.category,
      description: data.description,
      precio: data.precio,
    };
    panes.push(panACrear);
  },
  delete: (id) => {
    let panesFiltrados = panes.filter((pan) => {
      pan.id != id;
    });
    panes = panesFiltrados;
    return panes;
  },
};

module.exports = service;
