var http=require('http');
var file=require('fs');


//create a node server
const server=http.createServer((req,res)=>{
    //write file
    var content="<h1>Welcome to e-shop</h1>";
    file.writeFile('output.txt', content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully');
    });
    //read file process
    file.readFile("../html/booking.html","utf8",(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
        res.writeHead(200,{"content-type":"text/html"});
        res.end(data);
        console.log("File read operation completed...");
        }
    })    
        //res.writeHead(200,"Hai welcome");//send status code and message to client
        //res.end("Hi"); //send response to client
});
//enable server port number
server.listen(8000,()=>{
    console.log("Server started...")
});