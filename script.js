 
let A=5
let B=4
let K=3
let D=2
let E=1
let F=0

function Sum(){
let s=document.querySelectorAll('#bem')
let b=document.querySelectorAll('.bem')
let ore=document.querySelectorAll('.xem')
let cd=document.querySelectorAll('.c')
let k=document.querySelector('#su')
let sp=document.querySelector('#mee')
let C=document.querySelector('#wem')

let put=[]
 for (let i = 0; i < s.length; i++) {
     
put.push(s[i].value)
const up=put.map(str=>{
    return Number(str)
    
   
}

)

   k=up.reduce((b,c)=>b+c,0)
     document.querySelector('#su').value =k
}   


let ut=[]
for (let c = 0; c < b.length; c++) {
ut.push(b[c].value)
let pup=ut.map(stm=>{
return Number(stm)
})
let j=pup.reduce((d,e)=>d+e,0)

   C.value=j
   let r=[j]
  for (let up = 0; up < ore.length; up++) {
    const lement = ore [ up];
ut.forEach(function(movement,index){
         if ( movement >100){
            ore[index].value=""
         }
      
           else if ( movement > 69 && movement <100){
               ore[index].value="A"
            }
            else if( movement > 59 && movement <70 ){
               ore[index].value="B"

            } else if(movement > 50 && movement <60 ){
               ore[index].value="C"
            }
            else if(movement > 44 && movement <50 ){
               ore[index].value="D"
            }
            else if(movement > 40 && movement <45 ){
               ore[index].value="E"
            }
            else  if (movement > 0 && movement <40){
               ore[index].value="F"
            }
            
for (let ind = 0; ind < cd.length; ind++) {
   const ele= cd[ind];
    if(ore[index].value==="A"){
      
      cd[index].value= A * put[index]
      
   }
    else if(ore[index].value==="B"){
      cd[index].value= B * put[index]
      
   
   }
   else if(ore[index].value=="C"){
  
      cd[index].value= K * put[index]


} 
else if(ore[index].value==="D"){
   cd[index].value= D* put[index]              
}
else if(ore[index].value==="E"){
   cd[index].value= E * put[index]

   }
   else if(ore[index].value==="F"){
      cd[index].value= F* put[index]
       
  }
  let pusher=[]
  const pushing=pusher.map(sem=>{
   return Number(sem)
  }
 
  )
  const  dire= pushing.reduce(function (cc,cur){
     return cc+ cur
  },0)

  
}
  


  



})

}
}
}
