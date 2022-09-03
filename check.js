import add from './index.js'
const check=(arr,p)=>{
 const test1=arr[0]===p&&arr[1]===p&&arr[2]===p;
 const test2=arr[3]===p&&arr[4]===p&&arr[5]===p;
 const test3=arr[6]===p&&arr[7]===p&&arr[8]===p;
 const test4=arr[0]===p&&arr[3]===p&&arr[6]===p;
 const test5=arr[1]===p&&arr[4]===p&&arr[7]===p;
 const test6=arr[2]===p&&arr[5]===p&&arr[8]===p;
 const test7=arr[0]===p&&arr[4]===p&&arr[8]===p;
 const test8=arr[2]===p&&arr[4]===p&&arr[6]===p;
 const finalTest=test1||test2||test3||test4||test5||test6||test7||test8;
 if(finalTest){
    for(let i=1;i<=9;++i){
        document.getElementById(`${i}`).removeEventListener('click',add)
       }

     let announcement = document.querySelector('.last');
     document.querySelector('.last ').innerHTML=`Player ${p==='O'? '1':'2'} has won`
     announcement.style.visibility='visible';
 }
}

export default check;