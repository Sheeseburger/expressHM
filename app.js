const express = require('express');

const userRouter = require('./routes/userRoutes');
const studentRouter = require('./routes/studentRoutes');
const articleRouter = require('./routes/articleRoutes');
const logger = require('./middleware/logger.middlware');
const app = express();

// Middleweare
app.use(express.json({ limit: '10kb' }));

app.use(logger);
app.use('/users', userRouter);
app.use('/students', studentRouter);
app.use('/articles', articleRouter);
module.exports = app;
