const express = require('express')
const app = express()
var mysql = require('mysql');
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


var con = mysql.createConnection({
  host:"localhost",
   user: "root",
   password: "",
   database:"sahyadri",
 }); 

app.listen(3000, function () {
  console.log(' nodejs app listening on port 3000!')
})



var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

  app.use(allowCrossDomain);
  
app.get('/',function(req,res){
  con.connect(function(err)
  {
    if(err) throw err;
// con.query('SELECT * FROM organisation WHERE org_id = ?', 1, function(err,result)
// {
//   console.log("RESULT:" +JSON.stringify(result));
//   res.send(result);

// })
res.send("welcome....");
  })
})



app.post('/addSite', function (req, res) {
 let postData = req.body;
//  postData = JSON.stringify(postData);
  let sql = "INSERT INTO site (site_id,user_id,org_name,site_name) VALUES (?,?,?,?)"; 
 console.log(postData);
 
  con.query(sql, [postData.site_id,postData.user_id,postData.org_name,postData.site_name] ,function (error, result) {
   if (error) throw error;
   
    res.send(JSON.stringify(result));

 });
}
)

app.post('/addFloor', function (req, res) {
  let postData = req.body;
 //  postData = JSON.stringify(postData);
   let sql = "INSERT INTO floor (org_name,site_name,floor_name,floor_no,user_id) VALUES (?,?,?,?,?)"; 
  console.log(postData);
   con.query(sql, [postData.org_name,postData.site_name,postData.floor_name,postData.floor_no,postData.user_id] ,function (error, result) {
    if (error) throw error;
    //  res.send(JSON.stringify(result));
  });
 console.log("Post data:"+postData);
})

app.get('/viewSites',function(req,res)
{
  console.log(req);
  
  let sql = "SELECT * from site";
  con.query(sql, function(error,result)
  {
    if(error) throw error;
    res.send(JSON.stringify(result));
  });

})




// app.post('/addSite',function(req,res){
//   const postBody = req.body;
// console.log(postBody.site_id);
//   con.connect(function(err)
//   {
//     if(err) throw err;
//     con.query('insert into site (side_id, user_id,org_name,site_name) values ?',[postBody.site_id,postBody.user_id,postBody.org_name,postBody.site_name]);

//   res.send("data is inserted successfully...");
//   })
// })




// app.get('/', function (req, res) {
//   res.send('Hello World!');
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query('SELECT * FROM organisation WHERE org_id = ?',1, function(err, result){
//         console.log("RESULT :"+JSON.stringify(result));
//         console.log("Error :"+err)

//     })
// });
// });

// app.get('/addSite', function (req, res) {
//   res.send('Hello World!');
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query('SELECT * FROM organisation WHERE org_id = ?',1, function(err, result){
//         console.log("RESULT :"+JSON.stringify(result))
//         console.log("Error :"+err)

//     })
//   });
//   console.log("hi..........");
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query('insert into site values()', function(err, result){
//         console.log("RESULT :"+JSON.stringify(result))
//         console.log("Error :"+err)

//     })
//   });
  
  
  // app.post('/create', function (req, res) {
  //   con.connect(function(err) {
  //       if (err) console.log(err);
  //       console.log("Connected!");
  //       con.query('insert into site (side_id, user_id,org_name,site_name) values(?,?,?,?)',[req.bodyparser.side_id], function(err, result){
  //           console.log("RESULT :"+JSON.stringify(result))
  //           console.log("Error :"+err)
    
  //       })
  //     });
