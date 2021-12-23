const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  express.json({
    extended: false,
  })
);

app.use('/api/users', require('./routes/users'));
app.use('/api/permissions', require('./routes/permissions'));

//app listen
app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}`);
});
