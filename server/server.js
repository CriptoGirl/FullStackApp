const app = require('./startup/app');

const server = app.listen(process.env.PORT || 8081, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
