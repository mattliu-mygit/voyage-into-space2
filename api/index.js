const express = require('express');
const router = express.Router();

require('./routes/SGASurveyResults')(router);
require('./routes/maryland911alternatives')(router);
require('./routes/covid-19/mentalandemotional')(router);
require('./routes/covid-19/unstableincome')(router);
require('./routes/covid-19/resourceinsecurities')(router);
require('./routes/covid-19/collegehelps')(router);
require('./routes/covid-19/homeschoolingandchildcare')(router);
require('./routes/covid-19/racismhatecrimes')(router);
require('./routes/covid-19/diy')(router);
module.exports = router;
