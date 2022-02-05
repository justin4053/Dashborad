const axios = require('axios') // GET all the data

// exports可以直接導出這個function，方便其他檔案調用
exports.homeRoutes = (req, res) => {
    res.render('index')
}

exports.user_form = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('user_form', { users: response.data })
        })
        .catch(err => {
            res.send(err)
        })

}

exports.user_add = (req, res) => {
    res.render('user_add')
}

exports.user_update = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render('user_update', { user: userdata.data })
        })
        .catch(err => {
            res.send(err)
        })
}