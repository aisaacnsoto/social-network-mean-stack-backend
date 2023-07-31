const express = require('express');
const cors = require('cors');

const connect = require('./config/db');

const postRouter = require('./routers/PostRouter');
const commentRouter = require('./routers/CommentRouter');
const userRouter = require('./routers/UserRouter');

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log('Servidor ejecutándose.');
    connect();
});