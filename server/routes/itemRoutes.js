const express = require('express')
const router = express.Router()
const {
  getItem,
  postItem,
  deleteItem,
} = require('../controllers/itemController')

router.route('/').get(getItem).post(postItem)
router.route('/:id').delete( deleteItem)

module.exports = router