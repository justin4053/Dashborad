const express = require('express')
// 不要重複建立 const app = express()
// 因爲會建立新的express實體
// 所以用下述方式，然後將原本的app.get()改成route.get()
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/', services.homeRoutes)

route.get('/user-form', services.user_form)

route.get('/user-add', services.user_add)

route.get('/user-update', services.user_update)

route.get('/tictactoe', services.tictactoe)


//API
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

// 導出
module.exports = route