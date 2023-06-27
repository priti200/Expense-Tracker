const ExpenseSchema= require("../models/ExpenseModel")


exports.addExpense = async(req,res) => {
    console.log(req.body);
    const {title, amount, category, description, date} = req.body

    const expense = ExpenseSchema({
        title,
        amount, 
        category,
        description,
        date
    })

    try {
        // Validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message:'All fields are required!'})
        }
        if(amount < 0 || !amount === 'number'){
            return res.status(400).json({message:'Amount must be a positive number!'})
        }
        await expense.save()
        res.status(200).json({message: 'Expense Added Successfully!!'})
    } catch (error) {
        res.status(500).json({message: 'Server Error! Try again later!!'})

    }

    console.log(expense)
}

exports.getExpenses = async (req,res) =>{
    try{

        // for sorting the last income and add it in the first place
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses )
    }
    catch(error){
        res.status(500).json({message: 'Server Error! Try Again later!!'})
    }
}

exports.deleteExpense = async (req,res) =>{
    const { id } = req.params;
    console.log(req.params)
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) =>{
            res.status(200).json({message: 'Expense Deleted Successfully!!'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error! Try Again later!!'})
        })
}