const express = require('express')
const router = express.Router()
const {
  getUser,
  postUser,
  deleteUser,
  addCart,
} = require('../controllers/userController')

router.route('/').get(getUser).post(postUser)
router.route('/addCart').post(addCart)
router.route('/:id').delete( deleteUser)

module.exports = router