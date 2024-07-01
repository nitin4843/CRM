const express = require('express');
const path = require('path');
const session = require('express-session');
const MYSQLStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./util/database');
const app = express();

const store = new MYSQLStore({
    db: sequelize
});

const authRoutes = require('./routes/auth');
const crmRoutes = require('./routes/crm');

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);


app.use(authRoutes);
app.use(crmRoutes);

sequelize.sync().then(() => {
    app.listen(8000);
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = app;