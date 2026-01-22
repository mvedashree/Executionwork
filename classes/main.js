// class Demo{
//     constructor(){
//         console.log("i am venu");
//     }

// }
// new Demo();
// class Demo{
//     constructor(){
//         console.log("i am venu");
//         console.log(this)    
//     }
// }
// new Demo();
// class Demo{
//     a=76
//     constructor(){
//         console.log("i am venu");
//         console.log(this);
        
        
//     }
// }
// // let d =new Demo;
// // console.log(d);
// let c=new Demo;
// console.log(c)
// class Demo{
//     a=45
//     constructor(){
//         console.log("i am venu");
//         let b=23
//         this.e=65
//         console.log(this);
        
        
//     }
// }
// let c=new Demo();
// console.log(c);
// class Demo{
//     a=78
//     name="venu"
//     constructor(){
//         console.log("i am cons");
        
//     }
//     veda(){
//         let a=76
//         console.log(" i am veda");
//         console.log(a);
//         console.log(this.a);      
//     }
// }
// let c=new Demo();
// c.veda()
// class Demo{
//     a=65
//     name="venu"
//     constructor(){
//         console.log(" i am cons");
        
//     }
//     veda(){
//         let a=34
//         console.log(" i am veda");
//         console.log(a);
//         console.log(this.a);
//         console.log(arguments);
           
//     }

// }
// let d=new Demo();
// let d2=new Demo();
// d.veda(34,54,32,"a");
// d2.veda(45,76,89,"s");
// d.name="veda"
// console.log(d.name);
// console.log(d2.name);
// class Demo{
//     a=78
//     name="venu"
//     constructor(){
//         console.log("i am cons");
//         this.veda()
//         this.raj()
        
//     }
//     veda(){
//         console.log(" i am veda");
         
//     }
//     raj(){
//         console.log(" i am raj");
//     }
// }
// let c=new Demo
class Demo{
    a=78
    name="venu"
    constructor(){
        console.log("i am cons");
        
    }
    veda(a,...b){
        console.log(" i am veda");
        console.log(a);
         
    }
    raj(){
        console.log(" i am raj");
    }
}
let c=new Demo
c.veda(23,34)







