var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser());

var imageData = [
  {
    id: 0,
    url: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
    title: 'Duck',
    rating: 3
  },
  {
    id: 1,
    url: 'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
    title: 'Jellyfish',
    rating: 4
  },
  {
    id: 2,
    url: 'http://www.spyderonlines.com/images/wallpapers/images/images-22.jpg',
    title: 'Bear',
    rating: 1
  },
  {
    id: 3,
    url: 'http://eskipaper.com/images/images-4.jpg',
    title: 'Dog',
    rating: 5
  },
  {
    id: 4,
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/P.t.altaica_Tomak_Male.jpg',
    title: 'Tiger',
    rating: 5
  }
];

app.use('/', express.static('../client'));

app.get('/images', function (req, res) {
  console.log('received get request');
  res.send(imageData);
});

app.post('/image', function (req, res) {
  console.log('received post request: ', req.body);
  var newImg = req.body;
  imageData.push(newImg);
  res.send(newImg);
});

app.listen(8080, function () {
  console.log('Photo Outlet Server listening on port 8080!');
});