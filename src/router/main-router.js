const express = require('express');
const router = express.Router();
const mainController = require('../controlers/main-controller');

let url = '/api'

router.get("/", mainController.home);

router.get(url+'/', mainController.apiHome);

router.get(url+'/productos', mainController.apiProducts);
router.get(url+'/productos'+'/:id', mainController.apiProductDetail);

router.post(url+'/productos', mainController.apiProductCreate);

module.exports = router;