const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:8091'
// };

 
app.use(cors({
    origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
}));
// const whitelist = ["http://52.79.55.137:8090", "http://52.79.55.137:8091","http://52.79.55.137:8080"];
// const corsOptions = {
//     origin: function (origin, callback) { 
//       if (whitelist.indexOf(origin) !== -1) { // 만일 whitelist 배열에 origin인자가 있을 경우
//         callback(null, true); // cors 허용
//       } else {
//         callback(new Error("Not Allowed Origin!")); // cors 비허용
//       }
//     },
//   };
// app.use(cors(corsOptions)); // 옵션을 추가한 CORS 미들웨어 추가


const PORT = process.env.PORT || 8090;

// Set CORS option
// app.use(cors(corsOptions));

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// RESTful API route for DB
app.use('/', require('./app/mongodb/route/route.ts'));

// DB Connection
const db = require('./app/mongodb/model/index.ts');
      db.mongoose
        .connect(db.url, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => {
          console.log('db.url', db.url);
          console.log('db.mongoose', db.mongoose);
          console.log('db.tutorial.db', db.tutorial.db);
          console.log('Database Connection Success.');
        })
        .catch(err => {
          console.log('Database Connection Failure.', err);
          process.exit();
        });

// Default route for server status
app.get('/', (req, res) => {
  res.json({ message: `Server is running on port ${PORT}` });
});

// Set listen port for request
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
