const path=require("path");

module.exports=path.dirname(require.main.filename);


/*
 path.dirname(require.main.filename) would return the directory name of the file 
that was initially executed when the Node.js process started.

For example, if the initial file executed was located in 
/home/user/myproject/app.js, path.dirname(require.main.filename) would return /home/user/myproject.

*/