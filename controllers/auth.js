const Register = require('../models/register');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res) => {
    res.render('pages/samples/login', {
        errorMessage: ""
    });
}

exports.getRegister = (req, res) => {
    res.render('pages/samples/register', {
        errorMessage: ""
    });
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).render('pages/samples/login', { errorMessage: "Email is required" });
    }

    if (!password) {
        return res.status(400).render('pages/samples/login', { errorMessage: "Password is required" });
    }

    const userInfo = await Register.findOne({ where: { email: email } });

    if (!userInfo) {
        return res.status(400).render('pages/samples/login', { errorMessage: "Email not found" });
    }

    const result = await bcrypt.compare(password, userInfo.password);

    if (result) {
        req.session.isLoggedIn = true;
        req.session.user = userInfo;
        return req.session.save(err => {
            res.redirect('dashboard');
        });
    }
    else {
        return res.render('pages/samples/login', {
            errorMessage: 'Invalid Credentials'
        });
    }
};

exports.postRegister = async (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;

    if (!fullName) {
        return res.status(400).render('pages/samples/register', { errorMessage: "Full Name is required" });
    }

    if (!email) {
        return res.status(400).render('pages/samples/register', { errorMessage: "Email is required" });
    }
    if (!password) {
        return res.status(400).render('pages/samples/register', { errorMessage: "Password is required" });
    }
    if (!confirmPassword) {
        return res.status(400).render('pages/samples/register', { errorMessage: "Confirm Password is required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).render('pages/samples/register', { errorMessage: "Password does not match" });
    }

    const isUser = await Register.findOne({ where: { email: email } });

    if (isUser) {
        return res.status(400).render('pages/samples/register', { errorMessage: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new Register({
        fullName: fullName,
        email: email,
        password: hashedPassword
    });
    await user.save();

    return res.redirect('login');
}

exports.postLogout = (req, res) => {
    req.session.destroy(err => {
        res.redirect('/login');
    });
}