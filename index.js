import express from 'express'
const app = express()

app.get('/', (req, res)=>{
    res.send('GraphQL is amazing')
})
app.listen(8080, ()=> console.log('Running on localhost:8080'))