const express = require('express')

const middleWare = (req,res,next)=>{
    const currentTime =  getFormattedTimestamp();
    console.log(currentTime)
}