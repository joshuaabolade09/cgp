
//Points of Each grade// 
let A=5
let B=4
let C=3
let D=2
let E=1
let F=0

let cummulativePoint=[]

//Global variable and DOM manipulation of each elements//

let form = document.querySelector(".form");
let GP=document.querySelector('.display-GPA')
let course=document.querySelectorAll('.course-code')
let unit = form.querySelectorAll(".course-unit");
let score=form.querySelectorAll(".score")
let grade = form.querySelectorAll(".grade");
let totalPoint = document.querySelector("#mee");

let point = form.querySelectorAll(".point");

let displayGPA = document.querySelector(".display-GPA");
let totalUnit=document.querySelector('#su')

let totalscore=document.querySelector('#wem')
let bt=document.querySelector('.submit')
localStorage.setItem("map",JSON.stringify([]))
localStorage.setItem("set",JSON.stringify([]))



// Assign these elements to nothing because we'll use their values later

function Sum(){

   //Looping through the user inputs unit for each courses and pushing it into an array// 
  
  let put=[]
   for (let i = 0; i < unit.length; i++) {
       
  put.push(unit[i].value)
  const up=put.map(str=>{
      return Number(str ) 
  }
  )
  //Adding every inputs in the created array and initializing it to the total units//
     totalUnit=up.reduce((b,c)=>b+c,0)
       document.querySelector('#su').value =totalUnit
   
  }  
   //Looping through the user inputs scores for each courses and pushing it into an array// 
  let ut=[]
  for (let c = 0; c < score.length; c++) {
  ut.push(score[c].value)
  let pup=ut.map(stm=>{
  return Number(stm)
   
  })
   //Adding every score inputs in the created array and initializing it to the total  score units//
  let j=pup.reduce((d,e)=>d+e,0)
   totalscore.value=j
   


     //Looping through each score inputs and assigning grade to each score // 
    for (let up = 0; up < grade.length; up++) {
      const lement = grade [ up];
  ut.forEach(function(movement,index){
           if ( movement >100){
              grade[index].value=""
           }
                   else if ( movement > 69 && movement <100){
                 grade[index].value="A"
              }
              else if( movement > 59 && movement <70 ){
                 grade[index].value="B"
  
              } else if(movement > 50 && movement <60 ){
                 grade[index].value="C"
              }
              else if(movement > 44 && movement <50 ){
                 grade[index].value="D"
              }
              else if(movement > 40 && movement <45 ){
                 grade[index].value="E"
              }
              else  if (movement > 0 && movement <40){
                 grade[index].value="F"
              }
               for (let ind = 0; ind < point.length; ind++) {

            //Calculating each points by multiplying each grade points of each scores by their units//
     const ele= point[ind];
      if(grade[index].value==="A"){
         point[index].value= A * put[index]
         }
      else if(grade[index].value==="B"){
        point[index].value= B * put[index]
         }
     else if(grade[index].value=="C"){
      point[index].value= C * put[index]
  } 
  else if(grade[index].value==="D"){
     point[index].value= D* put[index]              
  }
  else if(grade[index].value==="E"){
     point[index].value= E * put[index]
  }
     else if(grade[index].value==="F"){
        point[index].value= F* put[index]
           }
         //Put each point value into an array//
           let ck=[point[0].value,point[1].value,point[2].value,point[3].value,point[4].value,point[5].value,point[6].value,point[7].value,point[8].value
           , point[9].value,point[10].value]
           //Convert the values from string to Number//
             const pushing=ck.map(sem=>{
                return Number(sem)
              }
              
            )
            //Add the numbers together and initialize it to the total point//

             totalPoint=pushing.reduce((s,p)=>s+p,0)
             document.querySelector("#mee").value=totalPoint


             cummulativePoint.push(totalPoint)
             console.log(totalPoint)
            
            
             


 


     }
  }) 

  //Initializing the local storage//


  }
  }
  
  }
  
  //SEt every user inputs to empty string//
 
  function calculate(){
   document.querySelector('#su').value=""
document.querySelector('#wem').value=""
document.querySelector('#mee').value=""
unit.forEach(function(movement){
  movement.value=""
})
score.forEach(function(movement){
 movement.value=""
})
grade.forEach(function(movement){
movement.value=""
})
point.forEach(function(movement){
movement.value=""
})
course.forEach(function(movement){
movement.value=""
       






})
  }
