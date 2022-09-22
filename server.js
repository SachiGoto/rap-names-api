const express = require('express')
const PORT = 8000;
const cors = require('cors')

// request express// 

const rappers ={
   '21 savage':{

    'age': 29,
    'birthname' :'Sheyaa Bin Abraham - Joseph',
    'birthlocaion': 'London, England'


   } ,
   'chance the rapper':{

    'age': 29,
    'birthname' :'Chancelor Bennet',
    'birthlocaion': 'Chicago, Illinois'


   } ,
   'unknown':{

    'age': 0,
    'birthname' :'unknown',
    'birthlocaion': 'unknown'


   } 
}

const app = express();
// create an variable that holds express 
app.use(cors());
app.get('/', (request, response)=>{
   response.sendFile(__dirname + '/index.html')
   // __dirname - start from whre server.js is located and find the html 
})

app.get('/api', (request, response)=>{
    response.json(rappers);

})

app.get('/api/:rapperName', (request, response)=>{
    // respond back json
    const rappersName = request.params.rapperName.toLowerCase();
    console.log(request.params.rapperName)
if(rappers[rappersName]){
    response.json(rappers[rappersName]);

}else{
    response.json(rappers['unknown']);
}
    //  response.json(rappers);
})







app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}!`)
})
