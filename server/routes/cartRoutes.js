const express = require('express')
const router = express.Router()
const {
  getCart,
  postCart,
  updateCart,
} = require('../controllers/cartController')

router.route('/').get(getCart).post(postCart)
// router.route('/:id').patch( updateCart)

module.exports = router