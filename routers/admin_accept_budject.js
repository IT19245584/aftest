const router = require('express').Router();
let admin_accept_budject = require('../models/admin_accept_budject');
let system_income_expense = require('../models/system_income_expense');
let Admin_year_summery = require('../models/admin_year_summery');
const bcrypt = require('bcryptjs');

router.route('/add').post((req,res) => {
   
    admin_accept_budject.deleteMany().then(function(){
    
            const expence = req.body.expence;
            const income = req.body.income;
            const year = req.body.year;

            const newBudject = new admin_accept_budject({
                expence,
                income,
                year});

            newBudject.save()
                .then(() => res.json('Budject Add!'))
                .catch(err => res.status(400).json('Error: '+err));
        }).catch(function(error){
        console.log(error); 
    });
});

    
router.route('/retriveBudject').get((req,res) => {
        admin_accept_budject.find({}).sort({_id:-1}).limit(1)
        .then(admin_accept_budject => res.json(admin_accept_budject))
        .catch(err => res.status(400).json('Error: '));
});

    
router.route('/addMoney').post((req,res) => {
    
            const income = req.body.IncomeAmount;
            const from = req.body.from;
            const type = req.body.type;
            const newIncome = new system_income_expense({
               income, 
               from,
               type});

            newIncome.save()
                .then(() => res.json('Income Add!'))
                .catch(err => res.status(400).json('Error: '+err));
});

    


router.route('/searchIncome').get((req,res) => {

        system_income_expense.find({type :'Income'})
        .then(income => res.json(income))
        .catch(err => res.status(400).json('Error: '));
});

router.route('/searchExpences').get((req,res) => {

        system_income_expense.find({type :'Expences'})
        .then(Expences => res.json(Expences))
        .catch(err => res.status(400).json('Error: '));
});


router.route('/yearSummery').post((req,res) => {
            var currentTime = new Date();
            const year = currentTime.getFullYear();
            const Acceptedincome = req.body.AIncome;
            const AcceptedExpence = req.body.AExpence;
            const Actualincome = "1000";
            const ActualExpence = "1000";

            const newAdmin_year_summery = new Admin_year_summery({
                year,
                Acceptedincome ,
                AcceptedExpence ,
                ActualExpence ,
                Actualincome});

            newAdmin_year_summery.save()
                .then(() => res.json('Year Summery Add!'))
                .catch(err => res.status(400).json('Error: '+err));
});

router.route('/retriveYearsSummeries').get((req,res) => {
       Admin_year_summery.find()
        .then(retriveYearsSummeries => res.json(retriveYearsSummeries))
        .catch(err => res.status(400).json('Error: '));
});
module.exports = router;