// Get the elements from HTML
let A=5
let B=4
let K=3
let D=2
let E=1
let F=0


let form = document.querySelector(".form");
let GP=document.querySelector('.display-GPA')
let st=document.querySelectorAll('.course-code')
let s = form.querySelectorAll(".course-unit");
let b=form.querySelectorAll(".score")
let ore = form.querySelectorAll(".grade");
let re = document.querySelector("#mee");

let cd = form.querySelectorAll(".point");

let displayGPA = document.querySelector(".display-GPA");
let k=document.querySelector('#su')

let C=document.querySelector('#wem')
let bt=document.querySelector('.submit')




// Assign these elements to nothing because we'll use their values later

function Sum(){
  
  let put=[]
   for (let i = 0; i < s.length; i++) {
       
  put.push(s[i].value)
  const up=put.map(str=>{
      return Number(str ) 
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
           let ck=[cd[0].value,cd[1].value,cd[2].value,cd[3].value,cd[4].value,cd[5].value,cd[6].value,cd[7].value,cd[8].value
           , cd[9].value,cd[10].value]
             const pushing=ck.map(sem=>{
                return Number(sem)
              }
              
            )
             re=pushing.reduce((s,p)=>s+p,0)
             document.querySelector("#mee").value=re
             
           
 localStorage.setItem("map",JSON.stringify(re))
 localStorage.setItem("set",JSON.stringify(k))
 const fre=JSON.parse(localStorage.getItem("set"))
 const free=JSON.parse(localStorage.getItem("map"))
 let pel=[]
 pel.push(fre)
 

GP.value=(fre).toFixed(2)
     }
  }) 
  }
  }
  }
  
 
  function calculate(){
   document.querySelector('#su').value=""
document.querySelector('#wem').value=""
document.querySelector('#mee').value=""
s.forEach(function(movement){
  movement.value=""
})
b.forEach(function(movement){
 movement.value=""
})
ore.forEach(function(movement){
movement.value=""
})
cd.forEach(function(movement){
movement.value=""
})
st.forEach(function(movement){
movement.value=""


})
  }
