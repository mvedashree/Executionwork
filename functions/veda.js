// function veda(){
//     console.log("i am veda");
    
// }
// veda()
// let venu=function(a,d){
//     console.log(a);
//     console.log(d);
    
// }
// venu(23,34)
// let raj=()=>{
//     console.log("i am raj");
//     return veda
    
// }
// let e=raj()
// console.log(e);

// let sai=(c,b)=>{
//     console.log("i am sai");
//     console.log(c);
//     console.log(b);
//     return "hello"    
// }
// let f=sai(34,65)
// console.log(f);
// function veda(abc){
//     console.log("i am veda");
//     abc()
// }
// function raj(){
//     console.log("i am raj");
    
// }
// veda(raj)
// callback
// let a=78
// let b=65
// let calculator=(display)=>{
//     sum=a+b
//     sub=a-b
//     mul=a*b
//     div=a/b
//     mod=a%b
//     display(sum,sub,mul,div,mod)
// }
//   let display=(sum,sub,mul,div,mod)=>{
//     console.log("sum"+sum);
//     console.log("sub"+sub);
//     console.log("mul"+mul);
//     console.log("div"+div);
//     console.log("mod"+mod);

//   }
//   calculator(display)
let names=["venu","raaj","esha"]
let namescallback=function(name,index,arry){
    console.log(name+" "+index+" "+arry);
}
names.forEach(namescallback)
