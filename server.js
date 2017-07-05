import config , {logStars} from './config';
import http from 'http';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';


// create server from express module
const server  = express();


// express server response routing '/'
server.get('/',(req,res) => {
  res.send('Hello Express');
});

// // serve the route './about.html'
// server.get('/about.html', (req,res) => {
//   // res.send('The about age');
//   fs.readFile('./about.html',(err, data) =>{
//     res.send(data.toString());
//   });
// });
// the above response can be simplified by the express static
// serving files under public directory automatically.
// this is a example of using express middleware
server.use(express.static('public'));

server.use('/api',apiRouter);


//express server listen on port 8080
server.listen(config.port,() => {
  console.info('Express listenning on port', config.port);
});


/** below is the example of using https module as client **/
// http.get('http://lynda.com',res=>{
//   console.log('Response status code: ',res.statusCode);
//   res.on('data', chunck => {
//     console.log(chunck.toString());
//   });
// });
// console.log(config, nodeEnv);
// logStars('pinkman')
/** below is the example of using https module as server **/
// server.on('request',(req,res) => {
//   res.write('Hello HTTP\n');
//   setTimeout(() => {
//     res.write('I can stream!\n');
//     res.end();
//   },5000);
// });

/** below is using the function in server.on as the
callback function of createServer function like below **/

// const server = http.createServer((req,res) => {
//   res.write('Hello HTTP\n');
//   setTimeout(() => {
//     res.write('I can stream!\n');
//     res.end();
//   },5000);
// });
// server.listen(8080);
