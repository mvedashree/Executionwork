// import axios from "axios";
// let user={
//     "name":"pra",
//     "email":"pra@gmail.com"
// }
// axios ("http://localhost:3000/users",{
//     method:"POST",
//     data:user,
//     headers:{
//         "content-type":"application/json"
//     }
// })

// .then(response=>{
//     console.log(response.data);
    
// }).catch(err=>{
//     console.log(err);
    
// })



// import axios from "axios";
// axios ("http://localhost:3000/users" ,{
//     method:"GET"
// })
// .then(response=>{
//     console.log(response);
    
// }).catch(err=>{
//     console.log(err);
    
// })


// import axios from "axios";
// let user={
//     "name":"pra1",
//     "email":"pra1@gmail.com"
// }
// axios ("http://localhost:3000/users/86fe",{
//     method:"PATCH",
//     data:user,
//     headers:{
//         "content-type":"application/json"
//     }
// })

// .then(response=>{
//     console.log(response.data);
    
// }).catch(err=>{
//     console.log(err);
    
// })



// import axios from "axios";
//  let baseurl = "https://online-exam-backend-production-12ba.up.railway.app"
//  function sendotp(){
//     let url = baseurl + "/api/auth/send-otp"
//     let body =  {
//         "emailOrPhoneNumber": "9666665154"
//     }
//     axios.post(url,body,{
//         headers :{
//             "content-type" :"application/json"
//         }
//     }).then(response=>{
//         console.log(response.data);
//     }).catch(error=>{
//         console.log(error.name);
//         console.log(error.messsage);
//     })
//  }
//  sendotp()

 import axios from "axios";
 let baseurl1 = "https://online-exam-backend-production-12ba.up.railway.app"
 function verifyotp(){
    let url = baseurl1 + "/api/auth/verify-otp"
    let body = {
        authLogId: "2407d58d-aec0-4da4-82d1-a3966ae26034",
        otp: "727259"
    }
    axios(url,body,{
        headers : {
            "content-type" : "application/json"
        }
    }).then(response=>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error.message);
        console.log(error.name);
    })
 }
 verifyotp()

//  import axios from "axios";
//  let baseurl2 = "https://online-exam-backend-production-12ba.up.railway.app"
//  function addStates(){
//     let url = baseurl2 + "/api/geo/states"
//     let body = {
//         stateName: "West Bengal",
//         country: "india"
//     }
//     axios.post(url,body,{
//         headers : {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY5MDk5MDI4LCJleHAiOjE3NjkxMjYzOTl9.5lGwz8p3bDWvKF0btn357pDDPniIaC6ADNsxm20Gcak"
//         }
//     }).then(response=>{
//         console.log(response.data);
//     }).catch(error=>{
//         console.log(error.name);
//         console.log(error.message);
//     })
//  }
//  addStates()

//   import axios from "axios";
//  let baseurl3 = "https://online-exam-backend-production-12ba.up.railway.app"
//  function getStates(){
//     let url = baseurl3 + "/api/geo/states"
    
//     axios.get(url,body,{
//         headers : {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRPUiIsInBlcm1pc3Npb25zIjpbXSwic3ViIjoiNzk4YjRiNTgtOGFmNi00ZDAzLThlZDEtYmEzOGU0OTFkODI1IiwiaWF0IjoxNzY5MDk5MDI4LCJleHAiOjE3NjkxMjYzOTl9.5lGwz8p3bDWvKF0btn357pDDPniIaC6ADNsxm20Gcak"
//         }
//     }).then(response=>{
//         console.log(response.data);
//     }).catch(error=>{
//         console.log(error.name);
//         console.log(error.message);
//     })
//  }
//  getStates()