const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
// maybe to fix problem add server/public???

//Routes
const choreRouter = require('./routes/chore.router.js')
app.use('/chore_table', choreRouter)
//need to switch to name of data table instead of weekend to do app







app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
});