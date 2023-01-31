import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express()
const port =process.env.PORT|| 8000;



// 
app.use(cors());
app.use(express.json());
const posts={
  "users": [
    { "id": 1, "name": "Aakash", "email": "aakash8566@gmail.com","password":"aaki","token":"2287" },
    { "id": 2, "name": "Rajendra", "email": "rajendra8566@gmail.com","password":"rj","token":"3333" }

  ],
}
const dataa={
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
app.get('/', (req, res) => {
  res.send(dataa)
});
app.get('/tar', (req, res) => {
  res.send('Hello World!')
});
app.get('/postings', (req, res) => {
  res.send(posts);
});
app.post('/postings', (req, res) => {
  const dat=req.body;
  posts.users.push(dat);
  res.send(posts)
});
// ?hello

mongoose.connect("mongodb+srv://aakash8566:<8566aakash>@cluster0.t7eunpk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  
})
.catch((er)=>{
  console.log(er);
})






// store something
