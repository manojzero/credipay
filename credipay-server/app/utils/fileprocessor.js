const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs").promises;



const publicFileDir = path.join(
    __dirname,
    "../../public/" + process.env.PUBLIC_FILE_DIRECTORY
);
const savePublicPDFFile = async (base64, originalFileName) => {
    console.log("originalFileName" + originalFileName);
    let newFileName = uuidv4() + path.extname(originalFileName);
    let saveLocation = path.join(publicFileDir, newFileName);
    let filePath = "/uploads/" + newFileName;
    const base64Data = base64.replace(/^data:([A-Za-z-+/]+);base64,/, "");
    try {
        fs.writeFile(saveLocation, base64Data, { encoding: "base64" });
    } catch (error) {
        console.log('================', error);
    }
    console.log("filePath" + filePath)
    return filePath;
};

module.exports = {
    savePublicPDFFile
}