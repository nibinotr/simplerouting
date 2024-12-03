const express = require('express');
const path = require('path')
const productRouter = require('./routes/productRoutes.js')
const app = express();


app.use(express.json())
app.use('/products',productRouter)
app.get('/',(req,res)=>{
    res.send("hello world") 
});

app.get('/home',(req,res)=>{
    // console.log(__dirname)

    res.sendFile(path.join(__dirname,"/index.html")) 
})


app.listen(3000,()=>{
    console.log("server started..")


});

