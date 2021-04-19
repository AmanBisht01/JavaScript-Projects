c =0;
vavalue = document.querySelector("#value");
dec=document.querySelector(".decrease");
reset=document.querySelector(".reset");
inc=document.querySelector(".increase");

inc.addEventListener("click",()=>{
    c++;
    updatedisp(c);
});

dec.addEventListener("click",()=>{
    c--;
    updatedisp(c);
});

reset.addEventListener("click",()=>{
    c=0;
    updatedisp(c);
});

function updatedisp(count){
    
    if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
      value.textContent = count;

};

