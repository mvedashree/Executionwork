// let a=45
// function venu(){
//     console.log("i am venu");  
// }
// class Raj {
//     constructor(){
//         console.log("i am raj");
        
//     }
// }

// module.exports={a, venu, Raj}


//second way to export
exports.a=45
exports.venu=function venu(){
    console.log("i am venu");  
}
exports.Raj=class Raj {
    constructor(){
        console.log("i am raj");
        
    }
}
