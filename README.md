# node-file-agregator
node-file-agregator is script that categorizes downloaded files based on their extensions and moves them to appropriate folders.

## Dependencies
- [Chokidar](https://www.npmjs.com/package/chokidar)
- [Forever](https://www.npmjs.com/package/forever)


## Installation

First, download this Project

```bash
git clone https://github.com/Grewather/node-file-agregator.git
```
Then install the packages
```bash
npm install
npm install forever -g
```

## Usage/Examples

Now here you can edit path to destination folders
```javascript
const docsFolder = `${userAcc}/Desktop/folders/documents`;
const imgFolder = `${userAcc}/Desktop/folders/Images`;
const systemFolder = `${userAcc}/Desktop/folders/System`;
const appFolder = `${userAcc}/Desktop/folders/Apps`;
```
To run in the background run:  
```bash
forever start main.js
```
To stop this run 
```
forever stop 0
```
## Troubleshooting
Sometimes it can throw an error simmilar to this
```
cannot be loaded because running scripts is disabled on this system. For more information, see about...
```
To fix this open powershell as an **Administrator** and run 
```
Set-ExecutionPolicy RemoteSigned
``` 
When you are done using this Script, you can return to the previous settings by typing in powershell
```
Set-ExecutionPolicy Restricted
```
## License

[MIT](https://choosealicense.com/licenses/mit/)

