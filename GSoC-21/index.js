// import {require} from 'https://requirejs.org/docs/release/2.3.5/minified/require.js';
// const mainApp = require('./uploads/app.js')
const express = require('express')
const upload = require('express-fileupload')
const app = express()

const validateFormat = (fileType, File_Format) => {
    if (fileType==="" && fileFormat==="CityGML"){
            
    }
}

app.use(upload())
// app.get() : using the get method, user sends a request (req) to the server 
// and accordingly the server send its response (res)

// here user requests the server using the get() method and 
// server sends the html file (index.html) as a response
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

console.log("Server Started on 5500!")
app.post('/', (req,res) => {
    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        // console.table(file)
        // console.log(file)
        const fileType = file.mimetype
        console.log(req)
        const fileFormat = req.body.File_Format
        
        console.log("Name of the file being uploaded:" + filename)

        // path where file is to be uploaded
        file.mv('./uploads/'+filename, function (err) {
            if (err) {
                res.send(err)
            }
            else {
                res.send("File Uploaded Successfuly!")
                mainApp(filename);
            }
        })
    }
})

app.listen(5500)


// Check version dependencies between the files!