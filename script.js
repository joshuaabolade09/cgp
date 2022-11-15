
//Points of Each grade// 
let A=5
let B=4
let C=3
let D=2
let E=1
let F=0

//Global variable and DOM manipulation of each elements//

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

let K=document.querySelector('#wem')
let bt=document.querySelector('.submit')
localStorage.setItem("map",JSON.stringify([]))
localStorage.setItem("set",JSON.stringify([]))



// Assign these elements to nothing because we'll use their values later

function Sum(){

   //Looping through the user inputs unit for each courses and pushing it into an array// 
  
  let put=[]
   for (let i = 0; i < s.length; i++) {
       
  put.push(s[i].value)
  const up=put.map(str=>{
      return Number(str ) 
  }
  )
  //Adding every inputs in the created array and initializing it to the total units//
     k=up.reduce((b,c)=>b+c,0)
       document.querySelector('#su').value =k
       console.log(k)
  }  
   //Looping through the user inputs scores for each courses and pushing it into an array// 
  let ut=[]
  for (let c = 0; c < b.length; c++) {
  ut.push(b[c].value)
  let pup=ut.map(stm=>{
  return Number(stm)
   
  })
   //Adding every score inputs in the created array and initializing it to the total  score units//
  let j=pup.reduce((d,e)=>d+e,0)
   K.value=j
     let r=[j]


     //Looping through each score inputs and assigning grade to each score // 
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

            //Calculating each points by multiplying each grade points of each scores by their units//
     const ele= cd[ind];
      if(ore[index].value==="A"){
         cd[index].value= A * put[index]
         }
      else if(ore[index].value==="B"){
        cd[index].value= B * put[index]
         }
     else if(ore[index].value=="C"){
      cd[index].value= C * put[index]
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
         //Put each point value into an array//
           let ck=[cd[0].value,cd[1].value,cd[2].value,cd[3].value,cd[4].value,cd[5].value,cd[6].value,cd[7].value,cd[8].value
           , cd[9].value,cd[10].value]
           //Convert the values from string to Number//
             const pushing=ck.map(sem=>{
                return Number(sem)
              }
              
            )
            //Add the numbers together and initialize it to the total point//

             re=pushing.reduce((s,p)=>s+p,0)
             document.querySelector("#mee").value=re
             console.log(re)
            
             


 


     }
  }) 

  //Initializing the local storage//

  const fre=JSON.parse(localStorage.getItem("set"))
const free=JSON.parse(localStorage.getItem("map"))

//Pushing the total units into the local storage//
fre.push(k)
//Pushing the total points into the local storage//
free.push(re)
localStorage.setItem("map",JSON.stringify(free))
localStorage.setItem("set",JSON.stringify(fre))



  }
  }
  
  }
  
  //SEt every user inputs to empty string//
 
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
