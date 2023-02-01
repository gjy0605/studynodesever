const express = require("express");
const bodyParser = require("body-parser");
const server = express();
server.use(bodyParser.json())

const users = [
    {
        id: "fsdfsd",
        username: "고정윤",
        text: "안녕하세요",
        roomname: "red"
    },
    {
        id: "fsd125125fsd",
        username: "고정윤22",
        text: "안녕하세요",
        roomname: "green"
    }
];


server.get("/api/user", (req, res) => {
    res.json(users);
});

server.get('/api/user/:id', (req, res)=>{
    const user = users.find((u)=>{
        return u.id === req.params.id;
    })
    if(user){ 
        res.json(user);
    }else{
        res.status(404).json({errorMessage: "User was not found"});    
    }
})

server.post("/api/user", (req, res) =>{
    users.push(req.body)
    res.json(users);
})

server.put ("/api/user/:id", (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req .params.id) ;
    if (foundIndex === -1) {
    res.status (404).json({ errorMessage: "User was not found" });
    } else {
    users [foundIndex] = { ...users [foundIndex], ...req.body } ;
    res.json(users [foundIndex]) ;
    }
});


server.listen(3000, ()=>{
    console.log("The server is running")
});