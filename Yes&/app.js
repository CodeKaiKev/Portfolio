//import fs from "fs";
let upload = document.getElementById('upload');
let outputBx = document.getElementById('outputBx');
let displayBx = document.getElementById('displayBx');
console.log("Hello!");

upload.addEventListener("change", ()=>{
    
    let fr = new FileReader();

    fr.readAsText(upload.files[0]);
    

    fr.onload = function() {
        console.log(fr.result);
        outputBx.innerHTML = fr.result;
        displayBx.innerHTML = fr.result;
        
        
        

    }
    const fs = require('fs');
    const path=require('path');
    const dirPath = path.join(__dirname, 'Feedback');
    console.log(dirPath);
})
reply();
import fs from 'fs';
function reply() {
    let reply = prompt("Please enter a reply to the query.");

    // Import the filesystem module
    //const fs = require("fs");
    
    
    let directory_name = "C:\Users\kevin.paulraj\Programming\Scripts\Yes&\Feedback";
        
    // Function to get current filenames
    // in directory
    let filenames = fs.readdirSync(directory_name);
        
    console.log("\nFilenames in directory:");
    filenames.forEach((file) => {
        console.log("File:", file);
    });
}



