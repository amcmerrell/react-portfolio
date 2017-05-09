var express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(port, () => {
  console.log('Express server running on port' + port);
});
