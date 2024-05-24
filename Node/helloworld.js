const express=require('express');
const app = express();
app.post('/index',(req,res)=>{
  res.send("hello world！");
}
);
app.listen(3000,(req,res)=>{
  console.log('The server is running...');
})
