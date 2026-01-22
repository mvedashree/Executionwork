//case-1
// let a =20
// try{//road
//     console.log("i am 1km");
//     console.log("i am 2km");
//     if(a<18){
//         throw new Error("below 18")
//     }
//     console.log("i am 3km");
//     console.log("i am 4km");
//     console.log("i am 5km");    
// }
// catch(err){//police station or hospital
//     console.log(err);
//     }
// finally{//home or destination
//     console.log("reached destination");
    
// }
// console.log("outside exception handling");
// //case-2
// let a =17
// try{//road
//     console.log("i am 1km");
//     console.log("i am 2km");
//     if(a<18){
//         throw new Error("below 18")
//     }
//     console.log("i am 3km");
//     console.log("i am 4km");
//     console.log("i am 5km");    
// }
// catch(err){//police station or hospital
//     console.log(err.message);
//     console.log(err.name);
//     }
// finally{//home or destination
//     console.log("reached destination");
    
// }
// console.log("outside exception handling");
//case-3
// let a=20
// try{
//     console.log("i am 1km");
//     console.log("i am 2km");
//     if(a<18){
//         throw new Error("below 18")
//     }
//     console.log("i am 3km");
//     a=b
//     console.log("i am 4km");
//     console.log("i am 5km");
    
// }
// catch(err){
//     console.log(err.message);
//     console.log(err.name);
      
// }
// finally{
//     console.log("reached home");
    
// }

class MinorError extends Error{
    constructor(message,errorcode,suggestion){
        super(message)
        this.name="MinorError"
        this.errorcode=401
        this.suggestion="ride after 18 "
    }
}
let a=17
try{
    console.log("i am 1km");
    console.log("i am 2km");
    if(a<18){
        throw new MinorError("below 18")
    }
    console.log("i am 3km");
    // let a=b
    console.log("i am 4km");
    console.log("i am 5km");
    
}
catch(err){
    console.log(err.message);
    console.log(err.name);
    console.log(err.errorcode);
    console.log(err.suggestion);     
}
finally{
    console.log("reached home");
    
}

