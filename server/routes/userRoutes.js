const express = require('express')
const router = express.Router()
const {
  getUser,
  postUser,
  deleteUser,
} = require('../controllers/userController')

router.route('/').get(getUser).post(postUser)
router.route('/:id').delete( deleteUser)

module.exports = router