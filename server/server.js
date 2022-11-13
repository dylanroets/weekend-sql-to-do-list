const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000
const choreRouter = require('./routes/chore.router')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


//Routes
app.use('/chore', choreRouter)








app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
});