[![build status](https://secure.travis-ci.org/jergason/express-the-cheat.png)](http://travis-ci.org/jergason/express-the-cheat)
#express-the-cheat

Do you use [Express](http://expressjs.com/)?

Are you sick of that `x-powered-by: Express` header that Express puts in by default?

Do you wish your HTTP headers were slathered in awesomesauce?

Do you think everything that is powered by anything should be [powered by the Cheat](http://www.youtube.com/watch?v=ln5Ar5aHDYM)?

Then `express-the-cheat` is the middleware for you!

##Installation

```bash
npm install express-the-cheat
```

##Usage

```JavaScript
var express = require('express')
  , app
  , expressTheCheat = require('express-the-cheat')
  ;

  app = express.createServer();
  app.use(expressTheCheat());
  app.get('/', function (req, res, next) {
    res.ok();
  });
  app.listen(5555);
```

Now all your responses should have an awesome `x-powered-by: The Cheat` header!
