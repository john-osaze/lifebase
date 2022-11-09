const express = require('express');
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

const AccountController = require('./controllers/accountController');

app.use(express.json());
app.use(cors());
app.use('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    // res.status('404').send('Wahala dey o');
})

app.post('/signup', (req, res) => {
    AccountController.register(req.body)
    .then(result=>{res.status(200).send({'message': result})})    
    .catch(err=>{; res.sendStatus(500)});

})
app.post('/login', (req, res) => {
    AccountController.login(req.body)
    .then(result=>{
        if (result.id) {
            res.status(200).send(result)
        } else {
            res.status(404).send({message: 'No user Found'})
        } })
    .catch(err=>{ res.status(500).json('Error')});
})
app.post('get-user-data' ,(req,res)=>{
    AccountController.getUserData(req.body);
})

app.listen(5000, () => console.log('connected on localhost/5000'))