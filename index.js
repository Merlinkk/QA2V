const express = require('express')
const app = express()

const middleWare = (req,res,next)=>{
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit" };
    const currentTime = now.toLocaleTimeString([], options);
    const url = req.url
    console.log(currentTime, url)
    next();
}

app.get('/',middleWare, (req,res)=>{
    console.log('works')
})

app.listen(5000, ()=>{
    console.log('listening...')
})

