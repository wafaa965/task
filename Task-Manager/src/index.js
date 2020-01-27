	
const express       = require('express')
const bodyParser    = require('body-parser');
require('./db/mongoose')

const cors = require('cors')
const todoRouter = require('./routers/todo')
const userRouter = require('./routers/user')


const app = express()
app.use(cors())
app.options('*', cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
const port = process.env.PORT || 3000

let secret = 'some_secret';
 
/* CREATE TOKEN FOR USE */
app.get('/token/sign', (req, res) => {
    var userData = {
        "name": "Muhammad",
        "id": "4321"
    }
    let token = jwt.sign(userData, secret, { expiresIn: '15s'})
    res.status(200).json({"token": token});
});

app.use(express.json())
app.use(todoRouter)
app.use(userRouter)


app.listen(port,()=>{
    console.log('Server is up on port '+port)
})
