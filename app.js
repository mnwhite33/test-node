const express =require('express')
const app=express()

app.get('/', (req,res)=>{
    res.send('shipped app to container')
})

app.listen(3000)