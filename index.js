
const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('morgan')
const config = require('config')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const apiAuthMiddleware = require('./middleware/apiAuthKey');




const Index = require('./routes/index')
const Users = require('./routes/users')


const port = 61500; 

connectDB()
dotenv.config()
console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'))

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use('/api', apiAuthMiddleware);


app.use(logger('dev'))


app.use('/api/v1', Index)
app.use('/api/v1/users', Users)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
