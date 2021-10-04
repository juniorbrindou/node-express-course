const express = require('express')
const app = express()
const mockUserData = [
    {'name':'Mark'},
    {'name':'Jill'}
]



app.get('/users',function (req,res) {
    res.json({
        success:true,
        message:'Liste des utilisateurs',
        Users:mockUserData
    })
})



app.listen(8000,function(){
    console.log("Server is running")
})