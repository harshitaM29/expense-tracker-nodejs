const express = require('express');
const sequelize = require('./utils/database');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(cors());

const expensesRoutes = require('./routes/expenses');
app.use(bodyParser.json({extended:false}));

app.use(expensesRoutes);


sequelize.sync().then(res => {
    app.listen(4000);
})
.catch(err => {
    console.log(err)
})
