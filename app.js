const morgan = require('morgan')
const express = require('express')
const layout = require('./views/layout')
const { db } = require('./models')
const models = require('./models')
const app = express();
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
// ...
app.use('/wiki', wikiRouter);
app.use('/users', userRouter)
app.use(express.urlencoded( {extended:false} ))
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res, next) => {
  res.send(layout(' '))
  next()
})

db.authenticate().then(() =>{
console.log('connected to the database')
})


const PORT = 3000;
const init = async() => {
  await db.sync()
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
init()

models.db.sync({force: true})

