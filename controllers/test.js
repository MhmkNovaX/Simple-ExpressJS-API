const users = require('../Database/users')

const getUsers = (req, res) => {
    res.status(200).json(users)
}

const createUser = (req, res) => {
    let newUsers = users
    const { id, name, email } = req.body
    
    if (id && name && email) {
        newUsers.push({ id, name, email })
        res.status(201).json(newUsers)
    } else if (!id) {
        res.status(400).json({ error: 'Specify a id' })
    } else if (!name) {
        res.status(400).json({ error: 'Specify a name' })
    } else if (!email) {
        res.status(400).json({ error: 'Specify a email' })
    }
}

const getUser = (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === Number(id))
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(400).json({ error: `User with id: ${id} not found` })
    }
}

const updateUser = (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    const user = users.find(user => user.id === Number(id))
    console.log(user)
    if (user && name && email) {
        const newUsers = users.map(user => {
            if (user.id === Number(id)) {
                user.name = name
                user.email = email
            }
            return user
        })
        res.status(200).json(newUsers)
    } else if (!user) {
        res.status(400).json({ error: `User with id: ${id} not found` })
    } else if (!name) {
        res.status(400).json({ error: 'Specify a name' })
    } else if (!email) {
        res.status(400).json({ error: 'Specify a email' })
    }
}

const deleteUser = (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === Number(id))
    if (user) {
        const newUsers = users.filter(user => user.id !== Number(id))
        res.status(200).json(newUsers)
    } else {
        res.status(400).json({ error: `User with id: ${id} not found` })
    }
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
}