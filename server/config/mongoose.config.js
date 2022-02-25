const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/authorsDB',{
    UseNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connecting is Established to the used DB'))
    .catch((err) => console.log('Connecting is Established to the used DB',err))
