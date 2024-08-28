

let boxArray=[12,23,34,56,78,12,59,10,20];

let createDiv=()=>{
    var sBox=document.createElement("div");
    sBox.id="m_boxes";
    sBox.setAttribute("class","container_b");
    var mainDiv=document.getElementById("main");
    
    mainDiv.appendChild(sBox);
}

let createBoxes=()=>{

    var sBox=document.getElementById("m_boxes");
    var boxContainer=boxArray.map(function(i,key){
       
        var boxes=document.createElement("div");
        boxes.id="boxes_"+key;
        boxes.setAttribute("class","box");
       sBox.appendChild(boxes);
       boxes.innerHTML=i;
    })
}


function main(){
    createDiv();
    createBoxes();
}




main();
