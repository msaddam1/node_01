module.exports= reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("provide your age");
    }
    else if(req.query.age<18){
        res.send("you cant access this page");
    }
    else{
        next();
    }
   
}