var count;
var Timer;
var timerHasStarted=false;
let initialSetup=()=>{
    
    var p_counter=document.getElementById("p_id");
     p_counter.innerHTML=count;

    
}


let timer=()=>{
    let dateTime=new Date();
 
   count=" "+dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
  
   return count;
}

let startTimer=()=>{
    if(timerHasStarted)return;

    timerHasStarted=true;
    var p_counter=document.getElementById("p_id");
    

     Timer=setInterval(function(){

        p_counter.innerHTML=timer();

    },1000)

    var startButton=document.getElementById("start");
    startButton.classList.add("color");
    var pauseButton=document.getElementById("pause");
    pauseButton.classList.remove("color");

}
let endTimer=()=>{
    timerHasStarted=false;
    clearInterval(Timer);
    var startButton=document.getElementById("start");
    startButton.classList.remove("color");
    var pausebutton=document.getElementById("pause");
    pausebutton.classList.add("color");
    


}

let addEvents=()=>{
    var buttons=document.getElementsByClassName("button");
    for(i=0;i<buttons.length;i++)
    {
        var i_button=buttons[i];
        i_button.addEventListener("click",function(){
         

         
            if(this.id=="start")
            {
                  startTimer();
            }
            else if(this.id=="pause"){
                endTimer();
            }
        })

    }
}


  


function main(){
    timer();
    initialSetup();
    addEvents();
  

}


main();