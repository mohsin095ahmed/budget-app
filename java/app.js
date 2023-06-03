const bud = document.getElementById("bud");
const exp = document.getElementById("exp");
const bal = document.getElementById("bal");
const list = document.getElementById("list");
 const info = document.getElementById("info");
const pri = document.getElementById("pri");
const tax = document.getElementById("tax");
const name = document.getElementById("name");
let amount = document.getElementById("amount"); 








function addam(){
    if(amount.value >  exp.innerText){
        bud.innerText = amount.value;
        bal.innerText = bud.innerText - exp.innerText;
        amount.value ='';
    }else{
        alert("your amount is less than to expensive");
        amount.value ='';
    }
    info.innerHTML ="";
}


let expMurg = [];
let mut =[];
let time = [];
let ar =[];

function adexp(){
    
let now = new Date().getMonth();
let mo ;
 
function g(){
    switch(now){
        case 0 :
            mo = "january";
            break;

            case 1:
                mo= "febuary";
                break;


  case 2:
    mo= "march";
   break;
       
 case 3:
 mo= "april";
 break;
   
 case 4:
    mo= "may";
    break;


    case 5:
        mo= "june";
        break;
        
        case 6:
            mo= "july";
            break;
            
            case 7:
                mo= "august";
                break;

                
            case 8:
                mo= "saptember";
                break;
                
            case 9:
                mo= "octuber";
                break;

                
            case 10:
                mo= "november";
                break;
                
            case 11:
                mo= "december";
                break;
    }


}
g();


let an = new Date().getDate();
let vn = new Date().getFullYear();
let nowdate = an + mo + vn;
let nowtime = new Date().getHours() +":"+new Date().getMinutes()+":"+new Date().getSeconds()
console.log(nowdate)


 let object={
    pri : pri.value,
    tax:tax.value,
    name:name.value,
    date: nowdate,
    timer: nowtime,
 }
let total = Number(object.pri)+Number(object.tax);
let li = document.createElement("li");
console.log(total)

let span1 =document.createElement('span');
let span2 =document.createElement('span');
let span3 =document.createElement('span');
let edit = document.createElement("button");
let deta = document.createElement("button");

edit.setAttribute("class", "fa-solid fa-pen-to-square pen");
deta.setAttribute("class" , "fa-solid fa-circle-info foo")
span1.setAttribute("class","i")
span2.setAttribute("class","ii")
span3.setAttribute("class","iii")

let span1tx=document.createTextNode(object.name);
let span3tx = document.createTextNode(total);

mut.push(total);
let car = mut.reduce((p,c)=>{
return Number(p) + Number(c)
},0)
let bong = bud.innerText - car
if(bong < 0){
mut.pop()
}

if(bong >= 0 ){
span1.appendChild(span1tx);
  span2.appendChild(edit);
span2.appendChild(deta);
span3.appendChild(span3tx);

    li.appendChild(span1);
  li.appendChild(span2);
li.appendChild(span3);

list.appendChild(li);

ar.push(object);

let obj={
    cost : new Date().getTime(),
}

time.push(obj.cost)

expMurg.push(Number(total));
let arry = expMurg.reduce((p,c)=> { return Number(p) + Number(c)},0);
exp.innerText = arry;
pri.value="";
tax.value="";
name.value="";

let bon = bud.innerText - exp.innerText;
bal.innerText = bon;
info.innerHTML ="";
edit.addEventListener("click", function(){
 //   let tn = object.name;
   
 console.log(this.parentNode.firstChild.nodeValue) 
    let upp = +prompt("update your price without tax" ,object.pri);
    let upt = +prompt("update your  tax" ,object.tax);
    let upn = prompt("update your expence name" ,object.name);
 
    object.pri = upp;
    object.tax= upt;
    delete object.name;
    object.name = upn; 
 
let update = Number(upp) + Number(upt);

let muti = [...mut];
let von = time.findIndex(sec => sec === obj.cost);

muti.splice(von, 1, update );

let card = muti.reduce((p,c)=> {return Number(p) + Number(c)},0);
let dong = bud.innerText - card;
if(dong >=0){
    let lop = document.getElementsByClassName("i");
    let lop1 = document.getElementsByClassName("iii");
 
 //     lop.innerText= object.name;
   //   lop1.innerText = update;

/*
    span1tx=document.createTextNode(object.name);
     span3tx = document.createTextNode(update);

     span1.appendChild(span1tx);
     span3.appendChild(span3tx);
     li.appendChild(span1);
     li.appendChild(span3)
  */


     span1.innerText  = object.name;
     span3.innerText = update;       
 //this.parentNode.firstChild.nodeValue = object.name;
 //this.parentNode.lastChild.nodeValue = update;

     expMurg.splice(von ,1, update);
     mut.splice(von ,1, update);

     arry= expMurg.reduce((p,c)=> {return Number(p)+ Number(c)},0);
     exp.innerText= arry;
     let bont = bud.innerText - exp.innerText;
     bal.innerText= bont;
     info.innerHTML ="";
} else{
    alert("out of budget")
    info.innerHTML ="";
}




})

}else{
    alert("out of budget");
    pri.value ="";
    tax.value="";
    name.value="";
    info.innerHTML ="";
}

deta.addEventListener( "click",function(){
    info.innerHTML= `  <h1> DETAILS </h1>
   <label class ="lab"> PRODUCT &nbsp;:</label>&nbsp; ${object.name}<br>
   <br><br>

   <label class ="lab"> PRICE &nbsp;:</label>&nbsp;${object.pri}<br><br><br>

   <label class ="lab"> TAX &nbsp;:</label>&nbsp;${object.tax}<br><br><br>

   <label class ="lab" > SHOPPING DATE &nbsp;:</label>&nbsp;${object.date}<br><br><br>
   <label class ="lab">SHOPPING TIME &nbsp;:</label>&nbsp;${object.timer}<br><br><br>
   `
})


}