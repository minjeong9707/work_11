//main열리면 index.ejs가 열림
exports.main = (req, res) => {
    res.render('index');
};
exports.login = (req, res) => {
    res.render('login');
};
exports.signUp = (req, res) => {
    res.render('signUp');
};
exports.profile = (req, res) => {
    res.render('profile');
};
