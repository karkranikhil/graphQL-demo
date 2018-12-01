import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema';


const app = express()

app.get('/', (req, res)=>{
    res.send('GraphQL is amazing')
})

const root ={friend:()=>{
    return {
        "id":7857868,
        "firstName":'Nikhil',
        "lastName":'karkra',
        "gender":'Male',
        "language":'ENglish',
        "email":'nik@gmail.com'
    }
}};
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(8080, ()=> console.log('Running on localhost:8080'))