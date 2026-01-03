let n=16;
let isDraw=false;
let color = "rgba(0, 0, 0, 1)";
 function changeCellColor(e){
    if(e.target.classList.contains("clmn")) {
      e.target.style.backgroundColor=color;
    }}

  function changeCellColorRainbow(e){
    let r=255*Math.random();
    let g=255*Math.random();
    let b=255*Math.random();
    color = `rgb(${r},${g},${b})`;
    if(e.target.classList.contains("clmn")) {
      e.target.style.backgroundColor=color;
    }}

  document.querySelector(".container").addEventListener("dblclick",(e)=>{
    isDraw = true;
  })

  document.querySelector(".rainbow").addEventListener("click",()=>{
    document.querySelector(".container").removeEventListener("mouseover",changeCellColor);
    document.querySelector(".container").addEventListener("mouseover",changeCellColorRainbow);
  })

  document.querySelector(".eraser").addEventListener("click",()=>{
    document.querySelector(".container").removeEventListener("mouseover",changeCellColorRainbow);
    document.querySelector(".container").addEventListener("mouseover",changeCellColor);
    color = "rgb(255,255,255)";
  })

  document.querySelector(".randomColor").addEventListener("click",()=>{
    document.querySelector(".container").removeEventListener("mouseover",changeCellColorRainbow);
    document.querySelector(".container").addEventListener("mouseover",changeCellColor);
    let r=255*Math.random();
    let g=255*Math.random();
    let b=255*Math.random();
    color = `rgb(${r},${g},${b})`;

  })

    document.querySelector(".eraseAll").addEventListener("click",()=>{
      document.querySelector(".container").innerHTML="";

      createGrid(n);

  })

  document.querySelector(".container").addEventListener("mouseover",changeCellColor);

 

  document.querySelector(".slider").addEventListener("input",(e)=>{
    document.querySelector(".N").textContent=document.querySelector(".slider").value;
    document.querySelector(".container").innerHTML="";
    n=document.querySelector(".slider").value
    createGrid(n);

  })

  //for transparency 
  // document.querySelector(".toggle").addEventListener("input",()=>{
  //     if(document.querySelector(".toggle").value=true) 
  // })



function createGrid(n){
  for (let i=1;i<=n;i++){
    let r=document.createElement("div");
    r.classList="row";
    for (let j=1;j<=n;j++){
      let c=document.createElement("div");
      c.classList="clmn";
      r.appendChild(c);}
    document.querySelector(".container").appendChild(r);
}}

createGrid(16);