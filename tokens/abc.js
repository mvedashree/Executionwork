  
// let baseurl="https://online-exam-backend-production-12ba.up.railway.app"
    function sendOtp(){
        let url=baseurl + "/api/auth/send-otp"
        let body={
            "emailOrPhoneNumber": "9666665154"
        }
        fetch(url,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "content-type":"application/json"
        }
        }).then(response=>{
            if(!response.ok){
            throw new Error(response.status+" "+response.statusText);
            
        }
        return response.json()
    }).then(result=>{
        console.log(result);
        
    }).catch(error=>{
        console.log(error);
    })
}
// sendOtp()

// let baseurl="https://online-exam-backend-production-12ba.up.railway.app"
    function verifyOtp(){
        let url=baseurl + "/api/auth/send-otp"
        let body={
            "authLogId": "d1a1722b-e23a-4abd-beab-f7afc8e1592f",
            "otp": "187668"
        }
        fetch(url,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "content-type":"application/json"
        }
        }).then(response=>{
            if(!response.ok){
            throw new Error(response.status+" "+response.statusText);
            
        }
        return response.json()
    }).then(result=>{
        console.log(result);
        
    }).catch(error=>{
        console.log(error);
    })
}

// verifyOtp()

let baseurl="https://online-exam-backend-production-12ba.up.railway.app"
    function getstatesOtp(){
        let url=baseurl + "api/geo/states"
        fetch(url,{
        method:"GET",
        headers:{
            "content-type":"application/json",
            "authorization":"Bearer "
        }
        }).then(response=>{
            if(!response.ok){
            throw new Error(response.status+" "+response.statusText);
            
        }
        return response.json()
    }).then(result=>{
        console.log(result);
        
    }).catch(error=>{
        console.log(error);
    })
}

getstatesOtp()





