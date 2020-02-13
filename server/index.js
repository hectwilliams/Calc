const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const path = require('path');
const {Pool, Client } = require('pg');
const {execSync} = require('child_process');

execSync(`psql -U user0 -d calc_conversion -f ${ __dirname}/conversion.sql &> /dev/null`, {encoding: 'utf-8', windowsHide: true }, (err, msg) => {
  if (err)
    throw('postgres not available ');
} ) ;


const pool = new Pool({
  user: 'user0',
  database: 'calc_conversion',
  port: '5432'
});

pool.connect()
.then(() => {console.log(' connection to database')})
.catch(() => {throw(' database connection failed')})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '..','public')));
app.listen(port, host, (msg)=> {
  console.log('express server running on http://localhost:' + port );
});

app.post('/measureUnits', (req, res) => {
  const qry = `
    SELECT conversion.${req.body.measureType}.${req.body.units[0]} AS a, conversion.${req.body.measureType}.${req.body.units[1]} AS b
    FROM conversion.${req.body.measureType}
  `
  async function requestUnit (query = '') {
    const dBRequest = pool.query(query);
    return await dBRequest;
  };

  requestUnit(qry)
  .then(db_res =>  res.send(db_res.rows[0]))
  .catch(db_err => console.log(db_err))
});

