var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
                     "article-one" : {
                      title:"Home Page",
                      heading:"Home Page of Wep apps",
                      content:`<div class='center'>
                                
                            </div>
                            <br>
                            <div class='center text-big bold'>
                                Hi! This is my first webpage
                            </div>
                            <script type="text/javascript" src="/ui/main.js">
                            </script>
                            `
                    },
                     "article-two" : {
                      title:'Home Page',
                      heading:'Home Page of Wep apps',
                      content:`<div class='center'>
                                <img src='/ui/madi.png' class='img-medium'/>
                            </div>
                            <br>
                            <div class='center text-big bold'>
                                Hi! This is my first webpage
                            </div>
                            <script type="text/javascript" src="/ui/main.js">
                            </script>
                            `
                    }
};
function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var content =  data.content;
var htmlTemplate = `
<html>
    <head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        ${content}
    </body>
</html>
`;
  return htmlTemplate;  
}
app.get('/', function (req, res) {
    
  res.sendfile('index.html');
});
app.get('/:pageName', function (req, res) {
    
    var pageName = req.params.pageName;
    console.log(pageName);
  res.send(createTemplate(articles[pageName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
