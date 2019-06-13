const express = require('express');
const uuid = require('uuid/v1');
const bodyParser = require('body-parser')
const app = express();
const port = 4000;


// parse application/x-www-form-urlencoded

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const db = {
    students: [
        {
            id: "1",
            name: "Student One",
            email: "one@mail.com"
        },
        {
            id: "2",
            name: "Student Two",
            email: "two@mail.com"
        },
        {
            id: "3",
            name: "Student Three",
            email: "three@mail.com"
        }
    ]
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get('/', (req, res) => {
//     console.log("Loading...");
//     res.json(db.students);
// })
app.get('/students', (req, res) => res.json(db.students))
app.get('/students/:id', (req, res) => { 
    let student = db.students.find(({ id }) => id === req.params.id);
    console.log(student);
    res.json(student);
})

app.post('/addStudents', (req, res) => { 
    console.log('Adding new student');
    // console.log(req.body);
    const id = uuid();
    const student = {
        id,
        name: req.body.name,
        email: req.body.email
    };

    db.students = [...db.students, student];
    res.json(db.students);
})

app.post('/students/edit', (req, res) => { 
    console.log('Editing student');
    const students = db.students.map(item => {
        if (item.id == req.body.id) {
            return {...item, name:req.body.name, email: req.body.email};
        }

        return item;
    });
    db.students = students;
    res.json(db.students);
})

app.post('/students/:id', (req, res) => { 
    console.log('Deleting student');
    const students = db.students.filter(({ id }) => id != req.params.id);
    db.students = students;
    res.json(db.students);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))