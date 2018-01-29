var express = require('express');

var app = express();

var artist = [
{
    id: 1,
    name: "Metallica"
},
{
    id: 2,
    name: 'Iron Maiden'
},
{
    id: 3,
    name: 'Deep Purple'
}
];

app.get('/', function(req, res){
    res.send('Heasdsadllo APIsadas');
})

app.get('/artist', function (req,res) {
    res.send(artist);
    
})


app.listen(3012, function (){
    console.log('API app started')
}

)