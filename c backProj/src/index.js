import mongoose from "mongoose"
import {DB_NAME} from "./constants"

import express from "express"


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