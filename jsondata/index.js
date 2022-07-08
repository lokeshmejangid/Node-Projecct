const fs = require('fs');

const bioData = {
    firstName: "lokesh",
    lastName : "Jangid",
    age : "30"    
}

//convert obj into json object
const jsonData = JSON.stringify(bioData);

//add json data into another file
fs.writeFile("jsonFile.json", jsonData, (error) => {
    console.log("done");
})

//read jsonFile
fs.readFile("jsonFile.json", "utf-8", (error, data) => {
    const orgData = JSON.parse(data);
    console.log(orgData);
})

