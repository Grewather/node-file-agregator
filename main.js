const chokidar = require("chokidar");
const os = require("os");
const path = require("path");
const fs = require("fs");

const userAcc = `C:/Users/${os.userInfo().username}`;
// paths to folders where files should be copied, you need to change this
const docsFolder = `${userAcc}/Desktop/foldery/documents`;
const imgFolder = `${userAcc}/Desktop/foldery/Images`;
const systemFolder = `${userAcc}/Desktop/foldery/System`;
const appFolder = `${userAcc}/Desktop/foldery/Apps`;

const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".tiff", ".tif", ".webp", ".svg", "JFIF"];
const docsExtension = [
  ".txt",
  ".doc",
  ".docx",
  ".odt",
  ".rtf",
  ".ppt",
  ".pptx",
  ".odp",
  ".xls",
  ".xlsx",
  ".ods",
  ".pdf",
]
const appExtension = [
  ".exe", 
  ".msi", 
  ".dmg",  
  ".app",  
  ".deb",
  ".rpm",  
  ".apk",  
];
const watcher = chokidar.watch(`${userAcc}/Downloads`, {
  persistent: true,
  ignoreInitial: true
});

watcher.on('ready', () => {
  console.log("Ready to watch files");
});
watcher.on('error', error => {
  console.error('Error occurred:', error);
});

watcher.on('add', filePath => {
  const extension = path.extname(filePath);
  console.log(`File ${filePath} with extension ${extension} has been added`);
  if (docsExtension.includes(extension.toLowerCase())) {
    mvToDir(filePath, path.join(docsFolder, path.basename(filePath)));
  }
  else if(imageExtensions.includes(extension.toLowerCase())){
    mvToDir(filePath, path.join(imgFolder, path.basename(filePath)));
  } else if(extension == ".iso"){
    mvToDir(filePath, path.join(systemFolder, path.basename(filePath)));
  } 
  else if (appExtension.includes(extension.toLowerCase())){
    mvToDir(filePath, path.join(appFolder, path.basename(filePath)));
    
  }
});

let mvToDir = (filePath, destPath) => {
  fs.rename(filePath, destPath, (err) => {
    if (err) {
      console.error("Error in moving file:", err);
    } else {
      console.log("The file was transferred successfully");
    }
  });
};
