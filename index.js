const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    if ( login === 'dernier' && password === 'cri') {
        res.send('Log in Dernier Cri!')
    } else {
        res.status(401).send('Login or password incorrect')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
