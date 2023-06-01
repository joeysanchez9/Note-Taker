const express = require('express');

//import the routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express ();

//Port Settings
const PORT = process.env.PORT || 3001;

//Parsing incoming data
//String or array
app.use(express.urlencoded({extended: true}));
//Json Data
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Listener
app.listen(PORT, () => {
    console.log(`API server is listening on port ${PORT}.`);
})