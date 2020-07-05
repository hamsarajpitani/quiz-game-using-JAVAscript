let timeing= document.getElementById("timeing");

let sec=00,min=0;
setInterval(() => {
    
    sec++;
    if(sec>59){
    sec=0; min++;
    }
    
    let formatted_sec = sec <10 ? `0${sec}` : `${sec}`;
    let formatted_min = min <10 ? `0${min}` : `${min}`;
    
    timeing.innerHTML = formatted_min + ":"+ formatted_sec;
}, 1000); 

