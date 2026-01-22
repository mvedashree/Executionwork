
let time=1
let myinterval=setInterval(()=>{
console.log(time);
time=time+1
},1000)
setTimeout(()=>{
    clearInterval(myinterval)
},6000)