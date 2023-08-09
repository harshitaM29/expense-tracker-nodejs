const express = require('express');

const router = express.Router();

const expenseController = require('../controller/expenses');

router.get('/expenses',expenseController.getExpenseData);

router.post('/expenses',expenseController.postExpenseData);

router.delete('/expenses/:id',expenseController.deleteExpenseData);

router.put('/edit-expenses/:id',expenseController.editExpenseData)

module.exports = router;