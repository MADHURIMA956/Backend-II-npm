const path = require('path');

const jsonServer = require('json-server');

const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/api', router)
server.listen(PORT, ()=> console.log(`JSON Server is running on port ${PORT}`))
const PORT = 5000

const path = require('path');

const jsonServer = require('json-server');

const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/api', router)
server.listen(PORT, ()=> console.log(`JSON Server is running on port ${PORT}`))
// From Swanand Kadam to Everyone:  04:22 PM
// <div>
//       <input type="number" id="id" placeholder="Id" />
//       <input type="text" id="name" placeholder="Name" />
//       <input type="number" id="price" placeholder="Price" />
//       <button onclick="addProduct()">Add Product</button>
//     </div>
