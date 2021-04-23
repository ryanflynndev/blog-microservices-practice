const express = require('express');

const { randomBytes } = require('crypto');

const app = express();
app.use(express.json());