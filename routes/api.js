const express = require('express')

const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/test')

const router = express.Router()

router.route('/users').get(getUsers).post(createUser)
router.route('/users/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router