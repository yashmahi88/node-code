const express = require('express'); 
const app = express();              
const port = 5000;                  

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        
    res.sendFile('index.html', {root: __dirname});      
                                                        
});

app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});