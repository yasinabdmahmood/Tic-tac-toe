import check from "./check.js";
const arr=[null,null,null,null,null,null,null,null,null]
let player=true;
const add=(e)=>{
    let index=e.target.querySelector('span').innerHTML;
    console.log(typeof index)
    index=parseInt(index)
   
    if(player){
        let circle=document.createElement('img');
        circle.setAttribute('src','./images/circle.svg');
        e.target.appendChild(circle);
        arr[index-1]='O';
        check(arr,'O')
        
       
     }
     else{
        let circle=document.createElement('img');
        circle.setAttribute('src','./images/x-lg.svg');
        e.target.appendChild(circle)
        arr[index-1]='X';
        check(arr,'X')
        
        
       

     }
     player=!player;
     stop(e)
     console.log(arr)
    
} 
const stop=(e)=>{
    e.target.removeEventListener('click',add)
     }
for(let i=1;i<=9;++i){
    document.getElementById(`${i}`).addEventListener('click',add)
     
}

document.querySelector('#reset').onclick=()=>{
    console.log('reset')
    location.reload()
}

export default add;
 