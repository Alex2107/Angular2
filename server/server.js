var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser')
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;
var root = __dirname + '/..'


app.listen(8080);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, '..')));
app.use(express.static(root));
app.use(session({
    secret: 'angular_tutorial',
    resave: true,
    saveUninitialized: true
}));

var db = new Db('tutor',
    new Server("localhost", 27017, {safe: true},
        {auto_reconnect: true}, {}));

db.open(function(err){
    if (err) console.log(err);
    else console.log("mongo db is opened!");

    db.collection('notes', function(error, notes) {
        db.notes = notes;
    });
    db.collection('sections', function(error, sections) {
        db.sections = sections;
    });
    db.collection('users', function(error, users) {
        db.users = users;
    });
});

app.get("/sections", function(req,res) {
    db.sections.find(req.query).toArray(function(err, items) {
        res.send(items);
    });
});

app.get("/notes", function(req,res) {
    db.notes.find(req.query).toArray(function(err, items) {
        res.send(items);
    });
});

app.post("/notes", function(req,res) {
    db.notes.insert(req.body).then(function() {
        res.end();
    });
});

app.delete("/notes", function(req,res) {
    var id = new ObjectID(req.query.id);
    db.notes.remove({_id: id}, function(err){
        if (err) {
            console.log(err);
            res.send("Failed");
        } else {
            res.send("Success");
        }
    })
});
app.post("/sections/replace", function(req,resp) {
    // do not clear the list
    if (req.body.length==0) {
        resp.end();
    }
    db.sections.remove({}, function(err, res) {
        if (err) console.log(err);
        db.sections.insert(req.body, function(err, res) {
            if (err) console.log("err after insert",err);
            resp.end();
        });
    });
});

app.post("/users", function(req,res) {
    db.users.insert(req.body, function(resp) {
        req.session.userName = req.body.name;
        res.end();
    });
});
//

app.get("*", function(req, res, next) {
    res.sendFile('index.html', { root : root });
});
app.get("/checkUserUnique", function(req,res) {
    res.send(req.query.user.length>2);
});

/*app.get("/notes", function(req,res) {
    console.log("reading notes", req.session.notes);

    var notes_init = [
        {text: "First note"},
        {text: "Second note"},
        {text: "Third note"}
    ];

    if (!req.session.notes) {
        req.session.notes = notes_init;
    }
    res.send(req.session.notes);
});
app.post("/notes", function(req,res) {
    var note = req.body;
    console.log("adding note", req.session.notes);
    req.session.notes.push(note);
    res.end();
});
app.delete("/notes/:idx", function(req,res) {
    var idx = req.params.idx;
    console.log("delete note id =",idx);
    req.session.notes.splice(idx,1);
    res.end();
});*/
/*
app.get("/notes", function(req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    var notes = [
        {text: "First note"},
        {text: "Second note"},
        {text: "Third note"}
    ]
    res.send(notes);
});
*/
/*

FOLDER STRUCTURE:

root
  app 
  server
     server.js
	 package.json
  index.html
  package.json
  
*/
  