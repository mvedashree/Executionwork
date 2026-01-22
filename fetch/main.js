//actual method
// fetch("http://localhost:3000/users")
// .then(response=>{
//     console.log(response);
// response.json()   
// }).catch(err=>{
//     console.log(err);
    
// })


//updated method
// fetch("http://localhost:3000/users/n")
// .then(response=>{
//     if(!response.ok){
//         throw new error(response.status+""+response.statusText)
//     }
//     return response.json()   
// }).then(result=>{
//     console.log(result);   
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);
// })



//adding 2 arguments in code 1.enpoint2.config
// let user={
//     name:"vada",
//     email:"vada22@",
//     phone:2345678
// }
// fetch("http://localhost:3000/users",{
//     method:"POST",
//     body:JSON.stringify(user),
//     header:{
//         "content-type":"application/json"
//     }
// })
// .then(response=>{
//     if(!response.ok){
//         throw new error(response.status+""+response.statusText)
//     }
//     return response.json()   
// }).then(result=>{
//     console.log(result);   
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);    
// })


//other way to write fetch
// let user={
//     name:"raj",
//     email:"raj@",
//     phone:2345678
// }
// let url="http://localhost:3000/users"
// let config={
//     method:"POST",
//     body:JSON.stringify(user),
//     header:{
//         "content-type":"application/json"
//     }
// }
// fetch(url,config)
// .then(response=>{
//     if(!response.ok){
//         throw new error(response.status+""+response.statusText)
//     }
//     return response.json()   
// }).then(result=>{
//     console.log(result);   
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);
     
// })


//other way to add data in fetch

// let user={
//     name:"raga",
//     email:"raga@",
//     phone:2345678
// }
// let url="http://localhost:3000/users"
// let config={
//     method:"POST",
//     body:JSON.stringify(user),
//     header:{
//         "content-type":"application/json"
//     }
// }
// let request=new Request(url,config)
// fetch(request)
// .then(response=>{
//     if(!response.ok){
//         throw new error(response.status+""+response.statusText)
//     }
//     return response.json()   
// }).then(result=>{
//     console.log(result);   
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);
     
// })


//other way to write header seperatly
// let user={
//     name:"raga1",
//     email:"raga@",
//     phone:2345678
// }
// let url="http://localhost:3000/users"
// let headers=new Headers()
// headers.append("content-type","application/json")
// let config={
//     method:"POST",
//     body:JSON.stringify(user),
//     header:headers
// }
// let request=new Request(url,config)
// fetch(request)
// .then(response=>{
//     if(!response.ok){
//         throw new error(response.status+""+response.statusText)
//     }
//     return response.json()   
// }).then(result=>{
//     console.log(result);   
// }).catch(err=>{
//     console.log(err.name);
//     console.log(err.message);
     
// })


//adding user using fucntion
// function addUser(){
//     let url="http://localhost:3000/users"
//     let user={"name":"cute","email":"cute@"}
//     fetch(url,{
//         method:"POST",
//         body:JSON.stringify(user),
//         header:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//         if(!response.ok){
//             throw new error(response.status +" "+ response.statusText);   
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);   
//     }).catch(err=>{
//         console.log(err.name);
//         console.log(err.message);      
//     })
// } 

// addUser()


//to get all the data
// function getUsers(){
//     let url="http://localhost:3000/users"
//     fetch(url,)
//     .then(response=>{
//         if(!response.ok){
//             throw new error(response.status +" "+ response.statusText);   
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);   
//     }).catch(err=>{
//         console.log(err.name);
//         console.log(err.message);
        
        
//     })
// } 

// getUsers()


//to get the single user
// function getUser(){
//     let url="http://localhost:3000/users/26d6"
//     fetch(url,)
//     .then(response=>{
//         if(!response.ok){
//             throw new error(response.status +" "+ response.statusText);   
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);   
//     }).catch(err=>{
//         console.log(err.name);
//         console.log(err.message);
        
        
//     })
// } 

// getUser()


//to patch one user
// function patchUser(){
//     let url="http://localhost:3000/users/26d6"
//     let user={"name":"raj2","email":"raj@"}
//     fetch(url,{
//         method:"PATCH",
//         body:JSON.stringify(user),
//         header:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//         if(!response.ok){
//             throw new error(response.status +" "+ response.statusText);   
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);   
//     }).catch(err=>{
//         console.log(err.name);
//         console.log(err.message);      
//     })
// } 

// patchUser()


//to put single user(replace)
// function putUser(){
//     let url="http://localhost:3000/users/26d6"
//     let user={"name":"raj2"}
//     fetch(url,{
//         method:"PUT",
//         body:JSON.stringify(user),
//         header:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//         if(!response.ok){
//             throw new error(response.status +" "+ response.statusText);   
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);   
//     }).catch(err=>{
//         console.log(err.name);
//         console.log(err.message);      
//     })
// } 

// putUser()




//to delete a user
// function deleteUser(){
//     let url="http://localhost:3000/users/26d6"
//     fetch(url,{
//         method:"DELETE",
//         header:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//         if(!response.ok){
//             throw new error(response.status +" "+ response.statusText);   
//         }
//         return response.json()
//     }).then(result=>{
//         console.log(result);   
//     }).catch(err=>{
//         console.log(err.name);
//         console.log(err.message);      
//     })
// } 

// deleteUser()


//practice