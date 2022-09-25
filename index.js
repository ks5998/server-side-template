const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express();
const PORT = 5000;

const viewPath = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);


users = [{ name: 'john' }, { name: 'fred' }, { name: 'alpha' }];

app.get('/', (req,res) => {
    const userName = req.query.user;
    res.render('index', { users: users, user: userName });
});

app.get('/about', (req,res) => {
    res.render('about')
});

// app.use(express.static(path.join(__dirname, './public')));

app.get('/' , (req,res) => {
    res.send('hello world');
});

app.get('*', (req,res) => {
    res.render('404',{
        errorcoment: 'Oops! no page found' 
    })
})

app.listen(PORT, () => { 
    console.log('listening on port 5000');
})