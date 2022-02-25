const express = require('express');
const app = express()
const cors = require('cors');

require('./config/mongoose.config')

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('./routes/author.routes')(app);





app.listen(8000,() => {console.log("server is up and running , listening on port 8000")})