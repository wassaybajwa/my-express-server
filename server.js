const express = require("express");

const app = express();

app.get("/", function(request, response){

    response.send("<h1>Hello World</h1>");
});

app.get("/contact", function(request, response){
    response.send("Contact me : wassaybajwa@hotmail.com");
});

app.get("/about", function(request, response){
    response.send("My name is Wassay and I'm a programmer")
});

app.get("/hobbies", function(request, response){
    response.send("My hobiees are books and coding");
});

app.listen(3000, function(){

    console.log("server started on port 3000");
});

