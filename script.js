window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let input=document.getElementById("output");
for(let i=0;i<=5;i++){
	promises.push(new Promise((resolve)=>{SetTimeout(()=>{resolve(i)},i)}))
}
let prom=Promise.any(promises);
prom.then((cont)=>{input.innerText=cont});