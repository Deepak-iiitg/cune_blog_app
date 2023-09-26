const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors({origin:true}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const PORT = 8080;
const articleRouter = require('./routes/articles').router;
app.use('/article',articleRouter);

app.listen(PORT,()=>{
    console.log('server running at Port '+PORT);
})