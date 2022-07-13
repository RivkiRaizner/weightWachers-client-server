const express = require('express');
const app = express();
const users = require('./routes/User.route');
const meetings = require('./routes/Meeting.route');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors=require('cors');


const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', users);
app.use('/meetings', meetings);
app.use(express.static('public'));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());


app.listen(port, () => {
    console.log('listening on port ' + port);
});




