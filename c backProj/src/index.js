// require('dotenv').config(path: './env') creates issue in code consistency

import dotenv from "dotenv"

import connectDB from "./db/index.js"

import express from "express"



dotenv.config({
    path: './env' //this was introduced recently that is why we need to use it as an experimental feature
})

connectDB()

















// first approach to connect the database

/*
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_DBURI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("err:",error)
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is Listening on Port${process.env.PORT}`)
    })

    } catch(error) {
        console.log("error: ", error)
        throw err
    }
})()
*/