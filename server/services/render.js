// exports可以直接導出這個function，方便其他檔案調用
exports.homeRoutes = (req, res) => {
    res.render('index')
}

exports.user_form = (req, res) => {
    res.render('user_form')
}

exports.user_add = (req, res) => {
    res.render('user_add')
}

exports.user_update = (req, res) => {
    res.render('user_update')
}