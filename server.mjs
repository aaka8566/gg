import express from "express";
import cors from "cors";
const app = express()
const port =process.env.PORT|| 8000;
app.use(express.json());
// 
app.use(cors());
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
  posts.postings.push(dat);
  res.send(posts)
});
//check and login
app.post('/users', (req, res) => {
  const dataa=req.body;
  
  const found=false;
  posts.users.map((el)=>{
if(el.email===dataa.email && el.password===dataa.password){
const found=el;
res.send(found);
}
  })
  return res.send("no user found")
  
});
//check and login
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})