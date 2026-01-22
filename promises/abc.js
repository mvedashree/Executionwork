 // let myfun=function(resolve,reject){
//     let status=true
//     if(status){
//         resolve("i succeeded")
//     }else{
//         reject("i failed")
//     }
// }
// let p=new Promise(myfun)
// p.then(result=>{
//     console.log(result);
    
// })
// let myfun=function(resolve,reject){
//     let status=false
//     if(status){
//         resolve("i succeeded")
//     }else{
//         reject("i failed")
//     }
// }

// let p=new Promise(myfun)
// p.then(result=>{
//     console.log("i am result");
//     console.log(result);
    
// }).catch(error=>{
//     console.log("i am error");
//     console.log(error);
    
// }).finally(()=>{
//     console.log("i completed");
    
// })
// let p=new Promise((resolve, reject) => {
//     let status=true
//     if(status){
//         resolve("i succeeded")
//     }else{
//         reject("i failed")
//     }
// })
// p.then(result=>{
//     console.log("i am from then");
//     console.log(result);
    
// }).catch(error=>{
//     console.log("i am from error");
//     console.log(error);
// }).finally(()=>{
//     console.log("i am completed");
    
// })



//asynfuction
// async function getData(){
//     console.log("i am first line");

// let p=new Promise((resolve) => {
//     let user={
//         "name":"veda",
//         "email":"veda@gmail.com",
//         "phone":"234567899"

//     }
//     resolve(user)
// })
// let result=await p
// console.log(result);

// console.log("i am last line");


// }
// getData()



// console.log("i am first line");

// let p=new Promise((resolve) => {
//     let user={
//         "name":"veda",
//         "email":"veda@gmail.com",
//         "phone":"234567899"

//     }
//     setTimeout(()=>{
//          resolve(user)
//     },2000)
   
// })
// p.then(result=>{
//     console.log(result);
    
// })

// console.log("i am last line");




// let p=new Promise((resolve) => {
//     let status=true
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded")
//     },2000)
//     }else{
//         reject("i an failed")
//     }  
// })
// p.then(result=>{
//     console.log(result);
    
// })




// async function getData() {
//     console.log("i am first line");
//     let p=new Promise((resolve,reject) => {
//     let status=false
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded")
//     },2000)
//     }else{
//         reject("i an failed")
//     }  
// })
// try{
//     let result=await p
//     console.log(result);
// }catch(error){
//     console.log(error);
    
// }
//  console.log("i am last line");
 
// }
// getData()



// console.log("i am first line");

// let p1=new Promise((resolve,reject) => {
//     let status=false
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded 1")
//     },1000)
//     }else{
//         reject("i an failed 1")
//     }  
// })

// let p2=new Promise((resolve,reject) => {
//     let status=true
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded 2")
//     },2000)
//     }else{
//         reject("i an failed 2")
//     }  
// })

// let p3=new Promise((resolve,reject) => {
//     let status=false
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded 3")
//     },3000)
//     }else{
//         reject("i an failed 3")
//     }  
// })

// let p4=new Promise((resolve,reject) => {
//     let status=true
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded 4")
//     },4000)
//     }else{
//         reject("i an failed 4")
//     }  
// })

// Promise.allSettled([p1,p2,p3,p4])
// .then(results=>{
//     console.log(results);
// }).catch(error=>{
//     console.log(error);
// });
// console.log("a am last line");

// console.log("i am first line");

// let p1=new Promise((resolve,reject) => {
//     let status=false
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded 1")
//     },1000)
//     }else{
//         reject("i an failed 1")
//     }  
// })

// let p2=new Promise((resolve,reject) => {
//     let status=true
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded 2")
//     },2000)
//     }else{
//         reject("i an failed 2")
//     }  
// })

// let p3=new Promise((resolve,reject) => {
//     let status=false
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded 3")
//     },3000)
//     }else{
//         reject("i an failed 3")
//     }  
// })

// let p4=new Promise((resolve,reject) => {
//     let status=true
//     if(status){
//         setTimeout(()=>{
//          resolve("i am succeeded 4")
//     },4000)
//     }else{
//         reject("i an failed 4")
//     }  
// })

// Promise.all([p1,p2,p3,p4])
// .then(results=>{
//     console.log(results);
// }).catch(error=>{
//     console.log(error);
// });
// console.log("a am last line");




 
    