const { mongoose } = require('./db/mongoose')
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
const morgan = require('morgan');
const app = express();

const port = process.env.PORT || 3100



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//Midellwares para contactos
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//Routes
app.use('/contact', require('./routers/contact'));
app.use('/api', require('./routers/user'));

