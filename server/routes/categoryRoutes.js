const express = require('express')
const router = express.Router()
const {
  getCategory,
  postCategory,
  deleteCategory,
} = require('../controllers/categoryController')

router.route('/').get(getCategory).post(postCategory)
router.route('/:id').delete( deleteCategory)

module.exports = router