console.log("Eithel's Output from Homework 6 Example 5");

for(let i=0;i<12;i++){
  let output = document.getElementById("output");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerText=i+1;
  tr.appendChild(td);
  output.appendChild(tr);
  if((i+1)%4==0){
  
      td.classList.add("four")
  }
  
  }