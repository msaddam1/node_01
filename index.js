const express=require('express');
const reqFilter=require('./middleware');
const route=express.Router();


const app=express();

route.use(reqFilter);
// app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send("this is homepage");
});
app.get('/users',(req,res)=>{
    res.send("this is user page");
});
route.get('/about',(req,res)=>{
    res.send("this is about page");
});
route.get('/contact',(req,res)=>{
    res.send("this is contact page");
});
app.use('/',route);

app.listen(5000);