window.onload = ()=>{
    show(0);
}

let arr_questions = [
   {
       id : 1,
       question : "What is the full form on RAM ?",
       answer : "random access memory",
       options : [
           "random access memory",
           "in build memory",
           "run time memory",
           "none of these"
       ]
   },

   {
       id : 2,
       question : "What is the full form on CPU ?",
       answer : "central processing unit",
       options : [
           "central processing unit",
           "computer processing unit",
           "code processing unit",
           "none of these"
       ]

   },

   {
       id : 3,
       question : "What is the full form of email ?",
       answer : "electronic mail service",
       options : [
           "electronic mail service",
           "computer processing unit",
           "code processing unit",
           "none of these"
       ]

   },
]


let question_count =0;
let correct_count =0;


function next(){
    if(question_count == arr_questions.length -1){
      sessionStorage.setItem("time",`minutes is ${min} second is ${sec}`);
      
      clearInterval();

      location.href="end.html"
        return;
    }

   let answer = document.querySelector("li.options.active").innerHTML;
   
   if(answer ==arr_questions[question_count].answer)
   {
       correct_count+=10;
   }    
    sessionStorage.setItem("points",correct_count); 
    question_count++;
    //if(question_count!=arr_questions.length)
    show(question_count);
   
   
}


function show(count){
    let question_id =document.getElementById("questions");

    /*question_id.innerHTML ="<h2>"+ "raja" + "</h2>";*/
    question_id.innerHTML = `<h2 class="main">Q ${count+1}.${arr_questions[count].question}</h2>
    <ul class="options_group">
                        <li class="options">${arr_questions[count].options[0]}</li>
                        <li class="options">${arr_questions[count].options[1]}</li>
                        <li class="options">${arr_questions[count].options[2]}</li>
                        <li class="options">${arr_questions[count].options[3]}</li>
                    </ul>`;

    toggleactive();               
}



function toggleactive(){

   let options = document.querySelectorAll("li.options");
   
   for(let i=0;i<options.length;i++){
       options[i].onclick = function(){
        for(let j=0;j<options.length;j++){
            if(options[j].classList.contains("active"))
            options[j].classList.remove("active")
        }
       options[i].classList.add("active");
      }
    }

   }


function submit_form(e){
   e.preventDefault();
   let data=document.forms["welcomeform"]["users_name"].value;
   sessionStorage.setItem("username",data);
   let name = sessionStorage.getItem("username");          
   location.href="quiz.html";
}