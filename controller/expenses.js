const Expenses = require('../models/expenses');

exports.getExpenseData = async(req,res,next) => {

    const expenses = await Expenses.findAll();
    res.status(200).json(expenses);
}
exports.postExpenseData = async(req,res,next) => {
    const description = req.body.description;
    const amount = req.body.amount;
    const category = req.body.category;
    const expenseData = await Expenses.create({
        description:description,
        amount:amount,
        category:category
    });
    res.status(201).json(expenseData);
}
exports.deleteExpenseData = (req,res,next) => {
    const id = req.params.id;

    Expenses.findByPk(id)
    .then(user => {
        return user.destroy();
    })
    .then(result => {
        console.log('Destroyed Expense');
    })
    .catch(err => console.log(err));


}

exports.editExpenseData = async(req,res,next) => {

    const id = req.params.id;
    const updatedDes = req.body.description;
    const updatedAmount = req.body.amount;
    const updatedCategory = req.body.category;
    const expense = await Expenses.findByPk(id);
    if(expense) {
        expense.description = updatedDes;
        expense.amount = updatedAmount;
        expense.category = updatedCategory;

        await expense.save();
    }
   
    res.status(201).json(expense);
}