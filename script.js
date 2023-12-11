const resetBtn = document.querySelector("#reset-btn");

const btns = document.querySelectorAll(".btn");
const msgCont = document.querySelector(".msg-container");
const msg = document.getElementById("msg");
let turn0 = true //playerX or playerO

const winpatterns= [//wining conditions
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
  ]

btns.forEach((btn)=>{
  //makes each button accessible
  btn.addEventListener("click",()=>{
    if(turn0){//playerO
      btn.textContent = "O"
      turn0 = false;
    }
    else{//playerX
      btn.textContent = "X"
      turn0 = true;
    }
    btn.disabled = true;
    
    checkWinner();
    
  })
})
const disableBtns = ()=>{//disable all btns after winner declaration
  for(let btn of btns ){
    btn.disabled = true;
  }
}

  resetBtn.addEventListener("click",()=>{
    for(let btn of btns){
      turn0 = true;
      btn.disabled = false;
      btn.textContent = "";
      msgCont.classList.add("hide");
    }
  })


const checkWinner = ()=>{
  
  for (let pattern of winpatterns) {
    const pos1Val = btns[pattern[0]].innerText
    const pos2Val = btns[pattern[1]].innerText
    const pos3Val = btns[pattern[2]].innerText
    
    if(pos1Val != ""&& pos2Val != "" && pos3Val != ""){//check that all btns have value i.e X or O
      if(pos1Val == pos2Val && pos2Val == pos3Val){
        msg.textContent = `Winner ${pos1Val}`;
        disableBtns();
        msgCont.classList.remove("hide");
      }
    }
  }
     }
