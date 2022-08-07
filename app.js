const express = require('express');
const userAuthentication = require('./src/auth/auth_router');
const postRouter = require('./src/posts/post_router');
const userRouter = require('./src/users/user_router');
const app = express();
const port = 7000

app.use(express.json());

app.get ("/",(req,res)=> {
    res.send('Server is on')
})

app.use(userRouter);
app.use(userAuthentication);
app.use(postRouter);

app.listen (port, ()=> console.log(`Server is on and listening from port ${port}`))