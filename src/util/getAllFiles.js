const fs = require("fs")
const path = require("path")

module.exports = (directory, foldersOnly = false) =>{
    let fileNames = [];
    const files = fs.readdirSync(directory, {withFileTypes:true});

    files.forEach(file => {
        const filePath = path.join(directory, file.name);

        if(!foldersOnly){
            if(file.isFile()){
                fileNames.push(filePath)
            }
        }
        else{
            if(file.isDirectory()){
                fileNames.push(filePath)
            }
        }
            
    }) 

    return fileNames;
}