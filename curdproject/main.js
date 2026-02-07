let url="http://localhost:3000/users";
function addUser(event){
    event.preventDefault();
    console.log("add user");
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let user={
        "name": name,
        "email": email,
        "phone": phone
    }
   console.log(user);
   axios(url,{
    method:"POST",
    data:JSON.stringify(user),
    headers:{
        "content-type":"application/json"
    }
   }).then(res=>{
    console.log(res);
    document.getElementById("message").innerText="user added succesfully"
    getUsers()
   }).catch(err=>{
    console.log(err);
    document.getElementById("message").innerText="something went wrong"
   })  
}
function getUsers(){
    axios(url)
    .then(res=>{
        console.log(res.data);
        let usersHtml=""
        for(let user of res.data){
            usersHtml = usersHtml + `<tr>
            <td>${user['id']}</td>
            <td>${user['name']}</td>
            <td>${user['email']}</td>
            <td>${user['phone']}</td>
            <td>delete</td>
            <td>edit</td>
            </tr>`
            document.getElementById("users").innerHTML= usersHtml  
        } 
    }).catch(err=>{
        console.log(err);
        
    })
    
}

