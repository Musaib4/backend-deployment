const fs = require("fs");
const path = require("path");



// Create a folder
// fs.mkdir("Musaib", { recursive: true }, (err) => {
//     if (err) throw err;

//     const filePath = path.join(__dirname, "Musaib", "note.txt");

//     // Write file
//     fs.writeFile(filePath, "This is Musaib's file!", (err) => {
//         if (err) throw err;

//         // Append
//         fs.appendFile(filePath, "\nAdded more content.", (err) => {
//             if (err) throw err;

//             // Read file
//             fs.readFile(filePath, "utf8", (err, data) => {
//                 if (err) throw err;
//                 console.log("Final content:\n", data);
//             });
//         });
//     });
// });








// fs functions

// fs.readFile("read.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     });

//     fs.writeFile("write.txt", "hello this is write me file",(err) => {
//         if (err) throw err;
//         console.log("file created");
//     });

//     fs.appendFile("write.txt", "\nupdated write me file",(err) => {
//         if (err) throw err;
//         console.log("file updated");
//     });

//     fs.unlink("delete.txt",(err) => {
//         if (err) throw err;
//         console.log("file deleted");
//     });



// path functions

// const fullPath = path.join(__dirname, "txtfiles", "read.txt");
// console.log(fullPath);
// console.log(path.resolve("read.txt"));

fs.mkdir("Musaibdata",{ recursive: true },(err)=>{
    if(err) throw err;

    const filePath = path.join(__dirname,"Musaibdata","info.txt")
    console.log(filePath)

    fs.writeFile(filePath,"My name is Musab, and I am learning Node.js.",(err)=>{
        if(err) throw err;
        console.log("file created")

            fs.appendFile(filePath,"\nadded more content.",(err)=>{
            if(err) throw err;
            console.log("file updated")

                fs.readFile(filePath,"utf8",(err,data)=>{
                if(err) throw err;
                console.log(data)

                    console.log(path.extname(filePath));
                    console.log(path.basename(filePath));
             })
        })
    })

})
