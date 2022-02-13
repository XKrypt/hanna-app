import express from "express";
import cors from 'cors';
import fs from 'fs';
import child_process from "child_process";

var exec = child_process.execFile

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());


var apps;

let configContent = fs.readFileSync("apps.json");

apps = JSON.parse(configContent).apps;

console.log(apps);

app.post("/apps/exec/:id", (req,res)=> {
    apps.forEach(element => {
        if (element.id == req.params.id) {
            exec(element.path);
            res.send(`Abrindo ${element.name}`);
        }
    });
    
})

app.get("/apps", (req,res) =>  {
    let appsFilter = [];

    apps.forEach(element => {
        appsFilter.push({
            name: element.name,
            id : element.id
        })
    });

    res.json(appsFilter);
    
})

let port  = 3000;
app.listen(port);
console.log(`Listen on port 3000`);