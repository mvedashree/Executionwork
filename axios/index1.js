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


import axios from "axios";
let user={
    "name":"pra1",
    "email":"pra1@gmail.com"
}
axios ("http://localhost:3000/users/86fe",{
    method:"PATCH",
    data:user,
    headers:{
        "content-type":"application/json"
    }
})

.then(response=>{
    console.log(response.data);
    
}).catch(err=>{
    console.log(err);
    
})