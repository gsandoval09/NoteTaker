const express = require('express');
const api = require('./Routes/apiroute.js');
const html = require('./Routes/htmlroutes.js');

const PORT = process.env.PORT || 3001;


const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', html);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
