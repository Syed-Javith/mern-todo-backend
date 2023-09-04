const express = require('express');
const path = require('path');

const StaticMiddleware = express.static(path.resolve('../public'))

module.exports = StaticMiddleware;