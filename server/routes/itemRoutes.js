const express = require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const {
  getItem,
  postItem,
  deleteItem,
  getItemId,
} = require('../controllers/itemController')

router.route('/').get(getItem).post(postItem)
router.route('/:id').get(getItemId).delete(deleteItem)

module.exports = router